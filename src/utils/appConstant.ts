export const MAX_RETRY_LOGIN: number = 5;
export const MobileTag = 'Mobile';
export const ManageTag = 'Manage';
export const ComicsTag = 'Comics';

const appConstant = Object.freeze({
  NUMBER_MAX_EMAIL: 250,
  TIME_ADDING_SUBSCRIPTION: 30 * 24 * 60, // minutes
  // TIME_ADDING_SUBSCRIPTION: 15, // minutes
  MAX_PAYMENT_RETRY: 2,
  TIME_EXP_TOKEN: 30 * 24 * 60 * 60,
  TIME_EXP_FOREVER: 99999999999,
  TIME_A_DAY: 24 * 60 * 60,
  TIME_A_WEEK: 7 * 24 * 60 * 60,
  TIME_EXP_RESET_CODE: 3 * 60,
  TIME_ZONE_DATABASE: 'Europe/Paris',
  LAST_DAY_OF_MONTH: 28,
  MAX_VEHICLE_BASIC: 3,
  DISTANCE_SEARCH_MAX: 200,
  DISTANCE_LIMIT: 5,
  LIMIT_MAX: 100,
  EXCEL_SHEET_LIMIT: 2000,
  FEE_TAX: 0.1,
  TVA_20: 0.2,
  FEE_MARKETING: 10,
  NUMBER_MAX_APPOINTMENT: 3,
  ADDRESS_MAIL_BCC: 'sandra@30mille.com',
  C0NTACT_EMAIL: 'contact@oovoom.com',
  FORMAT_INVOICE_PAYMENT: 'OoV',
  NAME_PLAN_DEFAULT: 'Plan One',
  CODE_PAYMENT_CRONJOB_FAIL: 'F202',
  CURRENCY: {
    USD: 'USD',
    EUR: 'EUR',
  },
  CODE_RESPONSE: {
    CODE_102: 102,
  },
  MESSAGE_RESPONSE_CODE: {
    MESSAGE_CODE_102: 'INVALID_TOKEN',
  },
  STATUS_RESPONSE: {
    SUCCESS: 200,
    FAIL: 400,
    FORBIDDEN: 403,
  },
  HEADER: {
    LOCALE_DEFAULT: 'en',
    LOCALE_HEADER: 'locale',
    AUTH: 'auth',
    TOKEN: 'token',
    LOCALE_ONE: 'fr',
    ACCESS_TOKEN: 'access_token',
    TOKEN_SECRECT: 'token_secrent',
    DEVICE_ID: 'device_id',
    ID: 'id',
    TIME_ZONE: 'time_zone',
  },
  DATABASE_DEFAULT: {
    START_DATE: '2011-11-05',
    LANGUAGE: 'en',
    LIMIT: 20,
    PAGE: 1,
  },
  PARAM: {
    TYPE_SORT: 'type_sort',
    CODE: 'code',
    ID: 'id',
    PAGE: 'page',
    LIMIT: 'limit',
    LANGUAGE: 'lang',
    TEXT: 'text',
  },
  SORT_TYPE_SERVICE: {
    NAME_ASC: 1,
    NAME_DESC: 2,
    TIME_EST_ASC: 3,
    TIME_EST_DESC: 4,
    SERVICE_APPROVED: 5,
    CREATED_ASC: 6,
    CREATED_DESC: 7,
  },
  SORT_TYPE_STAFF: {
    FULL_NAME: 1,
    TITLE: 2,
    PHONE: 3,
    TIME_ALLOCATE: 4,
    CREATED_ASC: 5,
    CREATED_DESC: 6,
  },
  SORT_TYPE_CUSTOMER: {
    FIRST_NAME_DESC: 1,
    FIRST_NAME_ASC: 2,
    NAME_DESC: 3,
    NAME_ASC: 4,
    EMAIL_DESC: 5,
    EMAIL_ASC: 6,
    PHONE_DESC: 7,
    PHONE_ASC: 8,
    CREATED_ASC: 9,
  },
  CUSTOMER_TYPE_FILTER: {
    CREATED_BY_CAR_OWNER: 1,
    CREATED_BY_GARAGE: 2,
  },
  SORT_APPOINTMENT: {
    PROCESS: 1,
    CONFIRMED: 2,
    PENDING: 3,
    FINISHED: 4,
    SENT_QUOTATION: 5,
    UNSENT_QUOTATION: 6,
    DATE_SCHEDULE_ASC: 7,
    DATE_SCHEDULE_DESC: 8,
    CREATED_ASC: 9,
    NAME_ASC: 10,
    NAME_DESC: 11,
  },
  FILTER_APPOINTMENT: {
    UPCOMING: 1,
    PAST: 2,
  },
  FILTER_USER: {
    CAR_OWNER_TYPE: 1,
    COMPANY_TYPE: 2,
    GARAGE_TYPE: 3,
    CHANNEL_TYPE: 4,
  },
  SORT_USER: {
    CREATED_ASC: 1,
    CREATED_DESC: 2,
    EMAIL_ASC: 3,
    EMAIL_DESC: 4,
    PHONE_ASC: 5,
    PHONE_DESC: 6,
    NAME_ASC: 7,
    NAME_DESC: 8,
  },
  SORT_SERVICE: {
    CREATED_ASC: 2,
    CREATED_DESC: 1,
    NAME_ASC: 3,
    NAME_DESC: 4,
    EST_ASC: 5,
    EST_DESC: 6,
  },
  SORT_QUOTATION: {
    CREATED_DESC: 1,
    CREATED_ASC: 2,
    NAME_ASC: 3,
    NAME_DESC: 4,
  },
  SORT_INVOICE: {
    CREATED_ASC: 1,
    CREATED_DESC: 2,
    NAME_ASC: 3,
    NAME_DESC: 4,
  },
  SORT_FEE_GARAGE: {
    CREATED_DESC: 1,
    NAME_ASC: 2,
    NAME_DESC: 3,
    PRICE_ASC: 4,
    PRICE_DESC: 5,
    APPOINTMENT_ASC: 6,
    APPOINTMENT_DESC: 7,
  },
  SORT_FEE_VEHICLE: {
    CREATED_DESC: 1,
    NAME_ASC: 2,
    NAME_DESC: 3,
    PRICE_ASC: 4,
    PRICE_DESC: 5,
    NUMBER_VEHICLE_ASC: 6,
    NUMBER_VEHICLE_DESC: 7,
  },
  CATEGORY_INVOICE: {
    PARKING: 1,
    GARAGE: 2,
  },
  TYPE_INVOICE_GARAGE: {
    INVOICE_REPAIR: 1,
    INVOICE_NORMAL: 0,
  },
  TYPE_VERIFY: {
    PHONE: 1,
    EMAIL: 2,
  },
  IS_DELETE: {
    UN_DELETE: 0,
    DELETE: 1,
  },
  STATUS_PAYMENT: {
    SUCCESS: 1,
    FAIL: 0,
    PENDING: 2,
  },
  STATUS: {
    NEW: 1,
    APPROVE: 2,
    TRUE: 1,
    FALSE: 0,
    INACTIVE: 1,
    ACTIVE: 2,
    PENDING: 1, // Using on claim management
    COMPLETED: 2, // Using on claim management
  },
  USER: {
    STATUS: {
      NEW: 1,
      INACTIVE: 1,
      ACTIVE: 2,
    },
    ROLE: {
      ADMIN: 1,
      CAR_OWNER: 2,
      GARAGE: 3,
      STAFF_ADMIN: 4,
      CLIENT: 5, // using for admin create payment history. User can same email, phone when having this role
    },
    IS_LOCK: {
      UN_LOCK: 0,
      LOCK: 1,
    },
    IS_DELETE: {
      UN_DELETE: 0,
      DELETE: 1,
    },
    IS_VIP: {
      BASIC: 0,
      VIP: 1,
    },
    IS_VERIFY: {
      FALSE: 0,
      TRUE: 1,
    },
    IS_COMPANY: {
      FALSE: 0,
      TRUE: 1,
    },
  },
  TABLE: {
    USER: 'user',
    USER_TOKEN: 'user_token',
    CATEGORY: 'category',
    COMIC: 'comic',
    VIEW: 'view',
    HISTORY: 'history',
  },
  REPORT_TYPE: {
    MONTHLY: 'monthly',
    YEARTHLY: 'yearthly',
    CONTACT_US: 1,
    REPORT_A_PROBLEM: 2,
  },
  IS_VIEW: {
    FALSE: 0,
    TRUE: 1,
    DELETE: 2,
  },
  NOTIFICATION: {
    UPDATE_ACTION: {
      CLIENT_SEEN: 1,
      CLIENT_DELETE: 2,
      GARAGE_SEEN: 3,
      GARAGE_DELETE: 4,
    },
    CATEGORY: {
      APPOINTMENT: 1,
      QUOTATION: 2,
      INVOICE: 3,
      EVENT: 4,
      PREVISION: 5,
      TASK: 6,
      CONTRACT: 7,
      TO_DO_LIST: 8,
      ANTAI: 9,
      REMIND: 10,
    },
    TYPE: {
      NEW: 1,
      ACCEPTED: 2,
      CONFIRMED: 3,
      SEND: 4,
      RECEIVED: 5,
      FINISHED: 6,
      REJECT: 7,
      PENDING: 8,
      APPROVED: 9,
      OVERDUE: 10,
    },
    VARIABLE: {
      CUSTOMER_NAME: '/customerName/',
      GARAGE_NAME: '/garageName/',
      ROW_INDEX_CUSTOMER: '{row_index_customer}',
      VARIABLE_QUANTITY: '/quantity/',
      SITE_NAME: '/siteName/',
      TIME: '/time/',
      TYPE_TIME: '/typeTime/',
      CONTRACT_NUMBER: '/contractNumber/',
      NAME_OF_TASK: '/name_of_task/',
    },
    ACTION: {
      APPOINTMENT_IS_CREATED: 'appointment_is_created',
      APPOINTMENT_IS_CONFIRMED: 'appointment_is_confirmed',
      APPOINTMENT_IS_REJECTED: 'appointment_is_rejected',
      APPOINTMENT_IS_FINISHED: 'appointment_is_finished',
      QUOTATION_IS_CREATED: 'quotation_is_created',
      QUOTATION_IS_REJECTED: 'quotation_is_rejected',
      QUOTATION_IS_ACCEPTED: 'quotation_is_accepted',
      INVOICE_IS_CREATED: 'invoice_is_created',
      TECHNICAL_CONTROL_EXPIRE: 'technical_control_expire',
      PREVISION_IS_CREATED: 'prevision_is_created',
      PREVISION_IS_APPROVED: 'prevision_is_approved',
      PREVISION_IS_REJECTED: 'prevision_is_rejected',
      TASK_IS_CREATED: 'task_is_created',
      TASK_IS_SUBMITTED: 'task_is_submitted',
      TASK_IS_OVERDUE: 'task_is_overdue',
      REMINDER_DRIVERS_NOT_DONE_TASK: 'reminder_drivers_not_done_task',
      CONTRACT_HAS_EXPIRED: 'contract_has_expired',
      CONTRACT_AUTOMATICALLY_RENEWS_TIME: 'contract_automatically_renews_time',
      TO_DO_LIST_EXPIRED: 'to_do_list_expired',
      INFRACTION_RECEIVED: 'infraction_received',
      REMIND_USER_TO_PAY_BEFORE_EXPIRED: 'free_access_nearly_expired',
      REMIND_USER_NEXT_REPAIR: 'remind_user_next_repair_nearly_reached',
      REMIND_USER_NEXT_REPAIR_REACHED: 'remind_user_next_repair_reached',
      A_TASK_HAS_BEEN_ASSIGNED_TO_YOU: 'a_task_has_been_assigned_to_you',
    },
    TYPE_USER: {
      COMPANY_OWNER: 1,
      EMPLOYEE_COMPANY: 2,
      CAR_OWNER: 3,
    },
    GO_TO: {
      PREVISION: 'prevision',
      TASK: 'task',
      HOME: 'home',
      INVOICE: 'invoice',
      CONTRACT: 'contract',
      ANTAI: 'antai',
      FORMULA: 'formula',
      INSPECTION: 'inspection',
    },
    TYPE_SOCKET: {
      EMPLOYEE_COMPANY_REQUEST_PREVISION: 'employee_company_request_prevision',
      EMPLOYEE_COMPANY_SUBMIT_TASK: 'employee_company_submit_task',
      TASK_IS_OVERDUE: 'task_is_overdue',
      REMINDER_DRIVERS_NOT_DONE_TASK: 'reminder_drivers_not_done_task',
      EVENT_TO_CAR_OWNER: 'event_to_car_owner',
      EVENT_TO_EMPLOYEE_COMPANY: 'event_to_employee_company',
      INVOICE_TO_CAR_OWNER: 'invoice_to_car_owner',
      INVOICE_TO_EMPLOYEE_ASSIGN_VEHICLE: 'invoice_to_employee_assign_vehicle',
      CONTRACT_HAS_EXPIRED: 'contract_has_expired',
      CONTRACT_AUTOMATICALLY_RENEWS_TIME: 'contract_automatically_renews_time',
    },
    TYPE_USER_SOCKET: {
      EMPLOYEE_COMPANY: 'employee_company',
      COMPANY_OWNER: 'company_owner',
      CAR_OWNER: 'car_owner',
    },
  },
  NOTIFICATION_V2: {
    UPDATE_ACTION: {
      VIEW: 1,
      DELETE: 2,
    },
  },
  FILTER_GARAGE: {
    FAVORITE: 1,
    NEAREST: 2,
    REPRESENTATION: 3,
  },
  M_SERVICE_STATUS: {
    IS_ADMIN_CREATED: {
      TRUE: 1,
      FALSE: 0,
    },
  },
  SORT: {
    CREATED_DESC: 1,
    NAME_ASC: 2,
    NAME_DESC: 3,
    STATUS_ASC: 4,
    STATUS_DESC: 5,
  },
  SORT_GARAGE: {
    CREATED_DESC: 1,
    NAME_ASC: 2,
    NAME_DESC: 3,
    ADDRESS_ASC: 4,
    ADDRESS_DESC: 5,
    RCS_NUMBER_ASC: 6,
    RCS_NUMBER_DESC: 7,
    ID_NUMBER_ASC: 8,
    ID_NUMBER_DESC: 9,
  },
  SORT_VEHICLE: {
    CREATED_ASC: 1,
    CREATED_DESC: 2,
    LICENSE_PLATE_ASC: 3,
    LICENSE_PLATE_DESC: 4,
    BRAND_ASC: 5,
    BRAND_DESC: 6,
  },
  TYPE_CUSTOMER: {
    INDIVIDUAL: 1,
    COMPANY: 2,
  },
  TYPE_BUSINESS: {
    INDIVIDUAL: 1,
    ORGANIZATION: 2,
  },
  IS_HOLIDAY: {
    OPEN: 1,
    CLOSE: 0,
  },
  STATUS_VEHICLE: {
    DELICATED: 1,
    DRIVERLESS: 2,
    SHARED: 3,
  },
  VEHICLE_PAYMENT_STATUS: {
    PENDING: 1, // waiting pay at end day
    PAID: 2, //
    FAIL: 3,
    VEHICLE_LOCKED: 4, // the vehicle is locked after 3 day when processing payment fail
    CANCEL: 5, // user cancel payment for vehicle
  },
  CONTRACT: {
    APPLY_FOR_STATUS: {
      ACTIVE: 1,
      ALL: 2,
    },
    RENEWABLE_TYPE: {
      YES: 1,
      NO: 0,
    },
    RENEWABLE_TYPE_DETAIL: {
      AUTOMATICALLY: 0,
      MANUALLY: 1,
    },
    RENEWABLE_TYPE_TIME: {
      SECOND: 0,
      MINUTE: 1,
      HOUR: 2,
      DAY: 3,
      MONTH: 4,
      YEAR: 5,
    },
    STATUS: {
      OPENNING: 1,
      FINISHED: 2,
    },
    RENEWABLE_STATUS: {
      YEARLY: 1,
      MONTHLY: 2,
      ONCE_PER_DAY: 3,
      ONCE_PER_HOUR: 4,
      ONCE_PER_MINUTE: 5,
      RENEWABLE_EACH_YEAR: 6,
      RENEWABLE_EACH_MONTH: 7,
      RENEWABLE_EACH_DAY: 8,
      RENEWABLE_EACH_HOUR: 9,
      RENEWABLE_EACH_MINUTE: 10,
    },
  },
  SUBCONTRACT: {
    SELECT_ADD_CONTACT: {
      YES: 1,
      NO: 0,
    },
    SUBCONTRACT_FOR: {
      USERS: 0,
      VEHICLES: 1,
    },
    ADD_CONTACT: {
      YES: 1,
      NO: 0,
    },
    SELECT_SITES: {
      ALL: 1,
      ACTIVE: 0,
    },
    REQUEST_QUOTATION: {
      PURCHAR: 1,
      RENT: 2,
    },
  },
  MAILBOX_TYPE: {
    COMPANY_OWNER: 'COMPANY_OWNER',
    EMPLOYEE: 'EMPLOYEE',
  },
  SORT_MAILBOX: {
    CREATED_ASC: 1,
    CREATED_DESC: 2,
  },
  RULE_COMPANY: {
    TYPE_RULE_APPLIED: {
      ALL_USERS: 0,
      DEFAULT_USERS: 1,
      SELECT_ROLES: 2,
      SELECTED_USERS: 3,
    },
    TYPE_RULE_VEHICLES: {
      ALL_VEHICLES: 0,
      DEDICATED_VEHICLES: 1,
      SHARED_VEHICLES: 2,
      DRIVERLESS: 3,
      OTHER: 4,
    },
    TYPE_SELECT_GARAGES_SERVICES: {
      ALL: 0,
      ACTIVE: 1,
    },
    TYPE_SELECT_CATEGORY_SERVICES: {
      ALL: 0,
      ACTIVE: 1,
    },
  },
  PREVISION: {
    TYPE_REQUEST: {
      VEHICLES: 1,
      OTHERS: 2,
    },
    TYPE_SIZE: {
      SMALL: 1,
      MEDIUM: 2,
      LARGE: 3,
    },
    STATUS: {
      PENDING: 1,
      APPROVED: 2,
      REJECT: 3,
      FINISHED: 4,
    },
    TYPE_DURATION: {
      MINUTE: 1,
      HOUR: 2,
      DAY: 3,
      MONTH: 4,
      YEAR: 5,
    },
  },
  OOVOOM: {
    // This default information when the oovoom system information is not config on setting table
    company_name: 'SAS Oovoom',
    address: '111 avenue Victor Hugo',
    zip_code: '75116',
    city: 'Paris',
    country: 'France',
    rcs: '889 500 021',
    vat_number: 'FR05889500021',
    capital: '34.232€',
  },
  OOVOOM_SETTING: {
    INFORMATION_SYSTEM: 'information_system',
  },
  DURATION_TYPE_OF_INSPECTION: {
    MONTH: 1,
    YEAR: 2,
  },
  TYPE_OF_COST: [
    {
      id: 1,
      value: 'Purchase',
      fr_value: 'Achat',
      type_id: 1,
      type_fee: 1,
      idx: 1, // TCO vehicle
    },
    {
      id: 2,
      value: 'Maintenance',
      fr_value: 'Entretien',
      type_id: 1,
      type_fee: 1,
      idx: 2,
    },
    {
      id: 4,
      value: 'Technical Inspection',
      fr_value: 'Contrôles techniques',
      type_id: 1,
      type_fee: 1,
      idx: 3,
    },
    {
      id: 5,
      value: 'Long Term Rental',
      fr_value: 'Location longue durée',
      type_id: 1,
      type_fee: 1,
      idx: 4,
    },
    {
      id: 6,
      value: 'Insurance',
      fr_value: 'Assurance',
      type_id: 1,
      type_fee: 1,
      idx: 5,
    },
    {
      id: 7,
      value: 'Tyres',
      fr_value: 'Pneus',
      type_id: 1,
      type_fee: 1,
      idx: 6,
    },
    {
      id: 8,
      value: 'Bonus/Malus',
      fr_value: 'Bonus/Malus',
      type_id: 1,
      type_fee: 1,
      idx: 7,
    },
    {
      id: 9,
      value: 'Company Car Tax',
      fr_value: 'TVS (Taxe sur les véhicules de société)',
      type_id: 1,
      type_fee: 1,
      idx: 8,
    },
    {
      id: 10,
      value: 'Non-deductible depreciation',
      fr_value: 'Amortissement non déductible',
      type_id: 1,
      type_fee: 1,
      idx: 9,
    },
    {
      id: 11,
      value: 'Depreciation',
      fr_value: 'Amortissement',
      type_id: 1,
      type_fee: 1,
      idx: 10,
    },
    {
      id: 12,
      type_id: 1,
      type_fee: 1,
      idx: 11,
      value: 'Funding',
      fr_value: 'Financement',
    },
    {
      id: 3,
      value: 'Repair Costs',
      fr_value: 'Coûts de réparation',
      type_id: 2,
      type_fee: 1,
      idx: 1, // TCO driver
    },
    {
      id: 13,
      value: 'Replacement vehicle',
      fr_value: 'Véhicule de remplacement',
      type_id: 2,
      type_fee: 1,
      idx: 2,
    },
    {
      id: 14,
      value: 'Fuel',
      fr_value: 'Carburant',
      type_id: 2,
      type_fee: 1,
      idx: 3,
    },
    {
      id: 15,
      value: 'Parking',
      fr_value: 'Parking',
      type_id: 2,
      type_fee: 1,
      idx: 4,
    },
    {
      id: 16,
      value: 'Tolls',
      fr_value: 'Péage',
      type_id: 2,
      type_fee: 1,
      idx: 5,
    },
    {
      id: 17,
      value: 'Washing',
      fr_value: 'Lavage',
      type_id: 2,
      type_fee: 1,
      idx: 6,
    },
    {
      id: 18,
      value: 'Fuel Card Management',
      fr_value: 'Gestion de carte carburant',
      type_id: 2,
      type_fee: 1,
      idx: 7,
    },
    {
      id: 19,
      value: 'Energy mixed',
      fr_value: 'Mix énergétique',
      type_id: 2,
      type_fee: 1,
      idx: 8,
    },
    {
      id: 20,
      value: 'Fines',
      fr_value: 'Amendes',
      type_id: 2,
      type_fee: 1,
      idx: 9,
    },
    {
      id: 21,
      value: 'Telematics',
      fr_value: 'Télématique',
      type_id: 3,
      type_fee: 1,
      idx: 1, // TCO fleet
    },
    {
      id: 22,
      value: 'Management software',
      fr_value: 'Gestion logicielle',
      type_id: 3,
      type_fee: 1,
      idx: 2,
    },
    {
      id: 23,
      value: 'Management fees',
      fr_value: 'Frais de Gestion',
      type_id: 3,
      type_fee: 1,
      idx: 3,
    },
    {
      id: 24,
      value: 'Total or partial outsourcing',
      fr_value: 'Externalisation partielle ou complète',
      type_id: 3,
      type_fee: 1,
      idx: 4,
    },
    {
      id: 25,
      value: 'Public Transportation',
      fr_value: 'Transport en commun',
      type_fee: 2,
      idx: 1, // Others
    },
    {
      id: 26,
      value: 'Plane Tickets',
      fr_value: 'Billets d’avion',
      type_fee: 2,
      idx: 2,
    },
    {
      id: 27,
      value: 'Train Tickets',
      fr_value: 'Billets de train',
      type_fee: 2,
      idx: 3,
    },
    {
      id: 28,
      value: 'Taxi Notes',
      fr_value: 'Frais de taxi',
      type_fee: 2,
      idx: 4,
    },
    {
      id: 29,
      value: 'Rent or Purchase of 2 wheelers',
      fr_value: 'Location ou achat de 2 roues',
      type_fee: 2,
      idx: 5,
    },
    {
      id: 30,
      value: 'Subscription fees to go to the office',
      fr_value: 'Abonnement pour trajets domicile-bureau',
      type_fee: 2,
      idx: 6,
    },
    {
      id: 31,
      value: 'Hotel and restaurant fees',
      fr_value: 'Frais d’hôtel et restaurant',
      type_fee: 2,
      idx: 7,
    },
    {
      id: 32,
      value: 'Other fees',
      fr_value: 'Autres frais',
      type_fee: 2,
      idx: 8,
    },
    {
      id: 33,
      value: 'Benefit in Kind',
      fr_value: 'Avantage en nature',
      type_id: 1,
      type_fee: 1,
      idx: 12,
    },
  ],
  FREQUENCY: {
    SINGLE: 1,
    MONTHLY: 2,
    YEARLY: 3,
  },
  TASK_MANAGEMENT: {
    TYPE_PROOF: {
      PICTURE: 1,
      BUTTON: 2,
      TEXT: 3,
      MILEAGE_LOG: 4,
      STATEMENT_OF_INSPECTION: 5,
    },
    TYPE_FREQUENCY: {
      ONCE: 1,
      PERIOD: 2,
    },
    APPLIED_TO: {
      ALL: 1,
      DEFAULT_USERS: 2,
      SELECT_ROLES: 3,
      SELECTED_USERS: 4,
      // SELECT_VEHICLES: 5
    },
    STATUS: {
      OPENNING: 1,
      FINISHED: 2,
      NOT_YET: 3,
      OVERDUE: 4,
      REMINDER_DRIVERS_NOT_DONE_TASK: 5,
    },
    VARIABLE: {
      VEHICLE_NAME: '/vehicle_name/',
      VEHICLE_KMS: '/vehicle_kms/',
    },
    STATUS_USER_COMPLETE_TASK: {
      DONE: 1,
      NOT_DONE: 2,
    },
  },
  TYPE_TIME: {
    SECOND: 1,
    MINUTE: 2,
    HOUR: 3,
    DAY: 4,
    MONTH: 5,
    YEAR: 6,
  },
  LINK_DOWNLOAD: {
    LINK_IOS: 'https://apps.apple.com/fr/app/oovoom/id1532378606',
    LINK_ANDROID:
      'https://play.google.com/store/apps/details?id=com.automoto&gl=FR',
  },
  DRIVERS_PLANNING_TYPE: {
    ASSIGNOR_VIEW: 1,
    REALITY_VIEW: 2,
  },
  ASSIGNOR_TYPE: {
    DEFAULT_USERS: 1,
    OTHER_DRIVER: 2,
  },
  CHANNEL: {
    PAYMENT_METHOD: {
      MANUAL: 1, // bank transfer, cheque, cash,..
      PAYMENT_GATEWAY_LINK: 2, // create card, other card,..
    },
    PAYMENT_PERIOD_TYPE: {
      SUBSCRIPTION: 1,
      ONE_OFF: 2,
    },
    PREFIX_CHANNEL_INVOICE: 'oov26',
    PREFIX_CHANNEL_QUOTATION: 'oov',
  },
  LEGAL_DOCUMENTS: {
    LIMIT_UPLOAD_FILE: 8,
  },
  TYPE_OF_PARKING: {
    STRESS: 1,
    PUBLIC: 2,
  },
  SPECIAL_OFFER: {
    APPEAR_ON: {
      FLEET: 1,
      CHANNEL: 2,
      GARAGE: 3,
    },
    STATUS: {
      ACTIVE: 1,
      DEACTIVE: 2,
    },
    TYPE_ACTION_CLICK: {
      CLICK_ON_POST: 1,
      CLICK_ON_LINK: 2,
    },
  },
  FLEET_QUOTATION: {
    TAX_PERCENT: 20,
    TYPE: {
      SUBSCRIPTION: 1,
      ONE_TIME: 2,
      FREE_ACCESS: 3,
      MONTHLY: 4,
    },
  },
  VEHICLE_CONST: {
    OPERATING_STATUS: {
      ARCHIVE: 1,
      DRIVING: 2,
      UNAVAILABLE: 3,
      PARKING: 4,
    },
  },
  PAYMENT_ACCEPTED: {
    CREDIT_CARD: 1,
    BANKING: 2,
    CASH: 3,
  },
  PARKING: {
    INVOICE_TO: {
      INDIVIDUAL: 1,
      COMPANY: 2,
    },
    TYPE: {
      INSIDE: 1,
      OUTSIDE: 2,
      STREET: 3,
    },
  },
  LOCKER_SYSTEM_STATUS: {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    ALL: 'all',
  },
  BIK_OPTION: [1, 2, 3, 4, 5, 6],
  KEY_ACCESS: {
    VARIABLE: {
      TOTAL_LOCKER_CELLS_REMAIN: '/totalLockerCellsRemain/',
    },
  },
  LIST_LANGUAGE_SUPPORT: [
    'en',
    'be',
    'lu',
    'ch',
    'mc',
    'es',
    'it',
    'de',
    'nl',
    'dk',
    'ad',
    'va',
    'ie',
    'pt',
  ],
  VAT_RATE: [
    { key: 1, value: 0, label: 'Selon Art. 293b du CGI' },
    { key: 2, value: 0, label: '0%' },
    { key: 3, value: 2.1, label: '2.1%' },
    { key: 4, value: 5.5, label: '5.5%' },
    { key: 5, value: 10, label: '10%' },
    { key: 6, value: 20, label: '20%' },
  ],
});

export default appConstant;

export declare const APP_I18N = 'APP_I18N';
export type UserFleetType = 'employee_company' | 'company_owner';

export const IS_PUBLIC_KEY = 'isPublic';

export { appConstant };
