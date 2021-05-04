export enum Colors {
  WHITE = "#FFF",
  GREEN = "#128c7e",
  GREEN2 = "#128C73",
  GRAYINACTIVE = "#DDD",
  GREENLIGHT = "#25D366",
  BLACK = "#000",
  GREEN_OPACITY = "rgba(37,211,106, 0.6)",
  GRAY_OPACITY = "#757575",
  ORANGE = "#FFA000",
  RED = "#D32F2F"
}

export enum Length {
  PASSWORD = 6,
  IMAGES_LOAD = 4
}

export enum Collections {
  USERS = "Users",
  PRODUCTS = "Products"
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
  OPEN_GALERY_EMPTY = "No se ha seleccionado una imagen",
  VALUE_NO_CHANGE = "El valor no ha sido modificado",
  VALUE_CHANGE = "Los datos se actulizaron cone exito",
  VALUE_CHANGE_ERROR = "Error al actulizar datos",
  // screen mymarket
  EMPTY_RATING = "Ingrese una calificación para el producto",
  EMPTY_IMAGES = "Debe cargar una imagen como mínimo",
  EMPTY_CATEGORY = "Seleccione una categoría para el producto",
  ADD_PRODUCT_SUCCESS = "Se agrego el producto correctamente",
  ADD_PRODUCT_ERROR = "Error al agregar el producto",
  UPDATE_PRODUCT_SUCCESS = "Producto actulizado correctamente",
  UPDATE_PRODUCT_ERROR = "Error al actualizar el producto",
  DELETE_PRODUCT_SUCCESS = "Producto eliminado correctamente",
  DELETE_PRODUCT_ERROR = "Error al eliminar poducto"
}

export enum MessagesLoading{
  LOADING = "Cargando ...",
  LOAD_CONFIG = "Cargando Configuración",
  SINGIN = "Iniciando Sesión",
  SINGUP = "Registrando Usuario",
  UPDATE_OPTION = "Actualizando datos",
  ADD_PRODUCT = "Agregando Producto",
  UPDATE_PRODUCT = "Actualizando Producto",
  DELETE_PRODUCT = "Eliminando Producto"
}

export enum CategoryTypes {
  BOOKS = 1,
  IDEAS = 2,
  ARTICLES = 3,
  SERVICES = 4
}