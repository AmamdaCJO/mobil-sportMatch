import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  // ---------- Raíz ----------
  root: {
    flex: 1,
    backgroundColor: '#000000',
  },

  // ---------- Imagen de fondo (anclada arriba) ----------
  bgImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '60%',        // ajusta entre 50% y 65% según lo que necesites
  },

  // ---------- Overlay con contenido ----------
  overlay: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.18,   // espacio desde arriba para el logo
  },

  // ---------- Logo ----------
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },

  // ---------- Cuadro blanco ----------
  card: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 25,
    paddingTop: 35,
  },

  // ---------- Título ----------
  title: {
    fontFamily: 'VenusRising-Bold',
    fontSize: 30,
    color: '#000000',
    textAlign: 'left',
    letterSpacing: 0.5,

    textShadowColor: '#000000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
  },
  subtitle: {
    fontSize: 18,
    color: '#bcbec5',
    textAlign: 'left',
    marginTop: 6,
  },

  // ---------- Línea azul ----------
  blueLine: {
    width: '5%',
    height: 3,
    backgroundColor: '#3ad5ec',
    marginTop: 10,
    marginBottom: 25,
    borderRadius: 2,
  },

  // ---------- Inputs ----------
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 15,
    backgroundColor: '#fafafa',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#666666',
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
  },

  // ---------- Recordarme / Olvidé contraseña ----------
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 4,
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#333333',
  },
  forgotText: {
    fontSize: 13,
    color: '#3ad5ec',
    fontWeight: '600',
  },

  // ---------- Botón principal ----------
  mainButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 52,
    borderRadius: 8,
    marginBottom: 25,
  },
  mainButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  mainButtonIcon: {
    width: 18,
    height: 18,
    tintColor: '#ffffff',
  },

  // ---------- Divisor ----------
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#dddddd',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 13,
    color: '#888888',
  },

  // ---------- Botones sociales ----------
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 8,
    height: 50,
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#ffffff',
  },
  socialIcon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  socialText: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
  },

  // ---------- Registro ----------
  registerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
    marginTop: 10,
    marginBottom: 30,
  },
  registerLink: {
    color: '#3ad5ec',
    fontWeight: 'bold',
  },
});