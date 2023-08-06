import React, { useState, useRef, useEffect } from 'react';
import Layout from './components/Layout';
import { ImCross } from "@react-icons/all-files/im/ImCross";
import { ImArrowRight2 } from "@react-icons/all-files/im/ImArrowRight2";
import { ImArrowLeft2 } from "@react-icons/all-files/im/ImArrowLeft2";
import { CgArrowsExpandRight } from "@react-icons/all-files/cg/CgArrowsExpandRight"
import { FiDownload } from "@react-icons/all-files/fi/FiDownload"
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import fotoStyles from './Photo.module.scss'
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import DialogContent from '@mui/material/DialogContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Snackbar from '@mui/material/Snackbar';
import LogoutIcon from '@mui/icons-material/Logout';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from 'axios';
import fileDownload from "js-file-download";
import { scale } from "@cloudinary/url-gen/actions/resize";

const RIVERS = [
  {label:'otava2016', title: 'Otava 2016'},
  {label: 'ohre2017', title: 'Ohře 2017'},
  {label: 'luznice2018', title: 'Lužnice 2018'},
  {label: 'vltava2019', title: 'Vltava 2019'},
  {label: 'otava2020', title: 'Otava 2020'},
  {label: 'luznice2021', title: 'Lužnice 2021'},
  {label: 'ohre2022', title: 'Ohře 2022'},
  {label: 'vltava2023', title: 'Vltava 2023'}
  ]

const Photo = () => {

  const [photos, setPhotos] = useState([]);
  const [urls, setUrls] = useState([]);
  const [index, setIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [riverTitle, setRiverTitle] = useState('')
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    email: ''
  });
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: 'dmb0zn354',
    }
  });

  const stamp = cloudinary.image('Fotky/general/stamp_xljw1x.png');

  const fetchImages = async (tag) => {
    setUrls('loading')
    const response = await axios.get(`https://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/list/${tag}.json`);
    const orderedImages = tag !== 'sample' ? response.data.resources.sort((a, b) => a.metadata[0].value - b.metadata[0].value) : response.data.resources;
    const cloudinaryImages = orderedImages.map((photos) => cloudinary.image(photos.public_id).quality('auto').resize(scale(800)))
    setPhotos(cloudinaryImages)
    const urls = cloudinaryImages.map((image) => image.toURL())
    setUrls(urls)
  }

  useEffect(() => {
    fetchImages('sample');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleDownloadPhoto = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob"
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        const user = {
          uid: userAuth.uid,
          email: userAuth.email
        }
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe;
  }, [])

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setValues({ email: '', password: '' })
        setWrongCredentials(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        if (errorCode === 'auth/wrong-password'
          || errorCode === 'auth/invalid-email'
          || errorCode === 'auth/user-not-found'
        ) {
          setWrongCredentials(true)
        }
      });
  }

  const modalRef = useRef();

  const handleOpenModal = (index) => {
    setModalIsOpen(true);
    setIndex(index);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }


  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalIsOpen(false);
    }
  };

  const handleArrow = (e) => {
    if (modalIsOpen) {
      if (e.keyCode === 39 && index < photos.length - 1) {
        setIndex(index + 1);
      } else if (e.keyCode === 37 && index > 0) {
        setIndex(index - 1);
      }
      return;
    }
    return
  }

  const handleSignOut = () => {
    signOut(auth);
    setAuthOpen(false);
    fetchImages('sample')
  }


  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleArrow, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleArrow, true)
    };
  });

  const handleClickRiver = (river) => {
    if (user === null) {
      setOpenAlert(true);
    } else {
      fetchImages(river)
      switch (river) {
        case 'otava2016':
          setRiverTitle('Otava 2016')
          break;
        case 'ohre2017':
          setRiverTitle('Ohře 2017')
          break;
        case 'luznice2018':
          setRiverTitle('Lužnice 2018')
          break;
        case 'vltava2019':
          setRiverTitle('Vltava 2019')
          break;
        case 'otava2020':
          setRiverTitle('Otava 2020')
          break;
        case 'luznice2021':
          setRiverTitle('Lužnice 2021')
          break;
        case 'ohre2022':
          setRiverTitle('Ohře 2022')
          break;
        case 'vltava2023':
          setRiverTitle('Vltava 2023')
          break;
        default: return;
      }
    }
  }

  const handleCloseAlert = (__, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <AdvancedImage cldImg={stamp} className={fotoStyles.stamp} />
      <Snackbar open={openAlert} onClose={handleCloseAlert} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity="info" sx={{ width: '100%', marginTop: '80px', borderRadius: '25px' }}>
          Tyto fotografie jsou dostupné jen po přihlášení
        </Alert>
      </Snackbar>
      {modalIsOpen ? (
        <div className={fotoStyles.modal}>
          <div className={fotoStyles.modalLayout} ref={modalRef}>
            <AdvancedImage cldImg={photos[index]} className={fotoStyles.modalImage} />
            <ImCross
              onClick={() => handleCloseModal()}
              className={fotoStyles.closingIcon}
            />
            {index < photos.length - 1 ? (
              <ImArrowRight2
                onClick={() => setIndex(index + 1)}
                className={fotoStyles.arrowRight} />
            ) : null}
            {index > 0 ? (
              <ImArrowLeft2
                onClick={() => setIndex(index - 1)}
                className={fotoStyles.arrowLeft}
              />
            ) : null}
            {/* Todle asi bude blbě */}

            <FiDownload
              className={fotoStyles.downloadIcon}
              onClick={() => handleDownloadPhoto(urls[index], `${urls[index].split('Fotky/')[1]}.jpg`)}
            />

          </div>
        </div>
      ) : null}
      <Layout>
        <div className={fotoStyles.rivers_buttons}>
          {user === null ? (
            <Fab onClick={() => setAuthOpen(true)} className={fotoStyles.loginButton} >
              <AccountCircleIcon />
            </Fab>
          ) : (
            <Fab onClick={handleSignOut} className={fotoStyles.loginButton} >
              <LogoutIcon />
            </Fab>
          )}
          {RIVERS.map((river, index) => (
            <Fab variant="extended"
              className={`${fotoStyles.button} ${fotoStyles[`button_${index + 1}`]}`}
              onClick={() => handleClickRiver(river.label)}
            >
              {river.title}
            </Fab>
          ))}
        </div>
        <div className={fotoStyles.auth}>
          {user === null ? (
            <Dialog open={authOpen} onClose={() => setAuthOpen(false)}>
              <DialogContent>
                <div className={fotoStyles.auth_form}>
                  <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      value={values.email}
                      onChange={handleChange('email')}
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Heslo</InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <Button onClick={() => signIn(values.email, values.password)}>Přihlásit se</Button>
                  {wrongCredentials && (
                    <Alert severity="error">Nesprávný email nebo heslo</Alert>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            null
          )}

        </div>
        <>
          <Divider
            sx={{ color: "white", width: "80%", margin: "3rem auto 1rem auto" }} light
            className={fotoStyles.divider}
          >
            JAK TO U NÁS VYPADÁ
          </Divider>
          {user === null ?
            <p style={{ color: "white" }}>(k prohlížení všech fotografií se prosím přihlašte)</p>
            :
            <div className={fotoStyles.riverTitle}>
              <p>{riverTitle}</p>
            </div>
          }
          <div
            className={`${fotoStyles.container} ${modalIsOpen ? fotoStyles.containerOpaque : ''}`}
            style={urls === 'loading' ? { display: 'block', height: '65vh' } : {}}>
            {urls === 'loading' ? (
              <CircularProgress />
            ) : urls.map((url, ix) =>
            (
              <div
                className={fotoStyles.galleryItem}
                key={ix}>
                <div
                  className={fotoStyles.image}
                  onClick={() => handleOpenModal(ix)}
                >
                  <LazyLoadImage
                    className={fotoStyles.advancedImage}
                    src={url}
                    effect="blur"
                    alt=""
                  />
                  <div className={fotoStyles.overlay}>
                    <CgArrowsExpandRight className={fotoStyles.expandArrow} />
                  </div>
                </div>
              </div>
            ))
            }
            <div className={fotoStyles.text}></div>
          </div>
        </>
      </Layout >
    </>
  )

}

export default Photo;
