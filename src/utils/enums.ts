export enum Colors {
  WHITE = "#FFF",
  GREEN = "#128c7e",
  GREEN2 = "#128C73",
  GRAYINACTIVE = "#DDD",
  GREENLIGHT = "#25D366",
  BLACK = "#000",
  GREEN_OPACITY = "rgba(37,211,106, 0.6)"
}

export enum Length {
  PASSWORD = 6
}

export enum Collections {
  USERS = "Users"
}

export enum FolderImages {
  AVATARS = "avatars",
  PRODUCTS = "products"
}

export enum MessagesToast{
  EMPTY = "Todos los campos son abligatorios",
  // screen login and register
  EMAIL_ERROR = "Ingrese un email correcto",
  PASSWORD_LENGTH = "La contraseña debe tener 6 caracteres como minimo",
  COMPARE_PASSWORD = "Las contraseñas deben ser iguales",
  REGISTER_USER_SUCCESS = "Usuario registrado con exito",
  REGISTER_ERROR ="Error al registrar usuario",
  REGISTER_USER_ERROR = "El email ya se encuentra registrado",
  REGISTER_FIREBASE_ERROR = "Error: Error: The email address is already in use by another account.",
  LOGIN_SUCCESS = "Sesion iniciada con exito",
  LOGIN_ERROR = "Email o contraseña incorrecta",
  NUMBER_ERROR = "Ingrese un # de teléfono correcto",
  CODE_CONFIRM_ERROR = "Ingrese un codigo válido",
  // screen profile 
  OPEN_GALERY_ERROR = "Se requiere permisos para acceder a la galeria",
  OPEN_GALERY_EMPTY = "No se ha seleccionado una imagen"
}

export enum MessagesLoading{
  LOADING = "Cargando ...",
  LOAD_CONFIG = "Cargando Configuración",
  SINGIN = "Iniciando Sesión",
  SINGUP = "Registrando Usuario",
  UPDATE_OPTION = "Actualizando datos"
}