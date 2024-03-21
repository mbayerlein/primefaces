if (window.PrimeFaces) {
  /** French */
  PrimeFaces.locales["fr"] = {
    accept: "Oui",
    addRule: "Ajouter une règle",
    am: "am",
    apply: "Appliquer",
    cancel: "Annuler",
    choose: "Choisir",
    chooseDate: "Choisir une date",
    chooseMonth: "Choisir un mois",
    chooseYear: "Choisir une année",
    clear: "Effacer",
    completed: "Terminé",
    contains: "Contient",
    custom: "Personnalisé",
    dateAfter: "Après le",
    dateBefore: "Avant le",
    dateFormat: "dd/mm/yy",
    dateIs: "La date est",
    dateIsNot: "La date n'est pas",
    dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    dayNamesMin: ["Di", "Lu", "Mar", "Mer", "Je", "Ve", "Sa"],
    dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    emptyFilterMessage: "Aucun résultat trouvé",
    emptyMessage: "Aucune option disponible",
    emptySearchMessage: "Aucun résultat trouvé",
    emptySelectionMessage: "Aucun élément sélectionné",
    endsWith: "Se termine par",
    equals: "Égal à",
    fileSizeTypes: ["o", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"],
    filter: "Filtre",
    firstDayOfWeek: 1,
    gt: "Supérieur à",
    gte: "Supérieur ou égal à",
    lt: "Inférieur à",
    lte: "Inférieur ou égal à",
    matchAll: "Correspond à tous",
    matchAny: "Au moins un Correspond",
    medium: "Moyen",
    monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    monthNamesShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun", "Jui", "Août", "Sept", "Oct", "Nov", "Dec"],
    nextDecade: "Décennie suivante",
    nextHour: "Heure suivante",
    nextMinute: "Minute suivante",
    nextMonth: "Mois suivant",
    nextSecond: "Seconde suivante",
    nextYear: "Année suivante",
    noFilter: "Aucun filtre",
    notContains: "Ne contient pas",
    notEquals: "Différent de",
    now: "Maintenant",
    passwordPrompt: "Saisissez un mot de passe",
    pending: "En attente",
    pm: "pm",
    prevDecade: "Décennie précédente",
    prevHour: "Heure précédente",
    prevMinute: "Minute précédente",
    prevMonth: "Mois précédent",
    prevSecond: "Seconde précédente",
    prevYear: "Année précédente",
    reject: "Non",
    removeRule: "Retirer une règle",
    searchMessage: "{0} résultats disponibles",
    selectionMessage: "{0} éléments sélectionnés",
    showMonthAfterYear: false,
    startsWith: "Commence par",
    strong: "Fort",
    today: "Aujourd'hui",
    upload: "Envoyer",
    weak: "Faible",
    weekHeader: "Sem",
    aria: {
      cancelEdit: "Annule l'édition",
      close: "Fermer",
      collapseLabel: "Effondrement",
      collapseRow: "Ligne repliée",
      editRow: "Édite une ligne",
      expandLabel: "Développer",
      expandRow: "Ligne dépliée",
      falseLabel: "Faux",
      filterConstraint: "Contrainte de filtrage",
      filterOperator: "Opérateur de filtrage",
      firstPageLabel: "Première Page",
      gridView: "Vue en grille",
      hideFilterMenu: "Masque le menu des filtres",
      jumpToPageDropdownLabel: "Aller à la page",
      jumpToPageInputLabel: "Aller à la page",
      lastPageLabel: "Dernière Page",
      listView: "Vue en liste",
      moveAllToSource: "Tout déplacer vers la source",
      moveAllToTarget: "Tout déplacer vers la cible",
      moveBottom: "Déplacer tout en bas",
      moveDown: "Déplacer vers le bas",
      moveTop: "Déplacer tout en haut",
      moveToSource: "Déplacer vers la source",
      moveToTarget: "Déplacer vers la cible",
      moveUp: "Déplacer vers le haut",
      navigation: "Navigation",
      next: "Suivant",
      nextPageLabel: "Page Suivante",
      nullLabel: "Aucune sélection",
      otpLabel: "Veuillez saisir le caractère de mot de passe à usage unique {0}",
      pageLabel: "Page {page}",
      passwordHide: "Masquer le mot de passe",
      passwordShow: "Montrer le mot de passe",
      previous: "Précédent",
      previousPageLabel: "Page précédente",
      rotateLeft: "Tourner vers la gauche",
      rotateRight: "Tourner vers la droite",
      rowsPerPageLabel: "Lignes par page",
      saveEdit: "Sauvegarde l'édition",
      scrollTop: "Défiler tout en haut",
      selectAll: "Tous éléments sélectionnés",
      selectLabel: "Sélectionner",
      selectRow: "Ligne sélectionnée",
      showFilterMenu: "Montre le menu des filtres",
      slide: "Diapositive",
      slideNumber: "{slideNumber}",
      star: "1 étoile",
      stars: "{star} étoiles",
      trueLabel: "Vrai",
      unselectAll: "Tous éléments désélectionnés",
      unselectLabel: "Désélectionner",
      unselectRow: "Ligne désélectionnée",
      zoomImage: "Zoomer l'image",
      zoomIn: "Zoomer",
      zoomOut: "Dézoomer",
    },
  };

  // custom PF labels
  PrimeFaces.locales["fr"] = $.extend(true, {}, PrimeFaces.locales["fr"], {
    weekNumberTitle: "S",
    isRTL: false,
    yearSuffix: "",
    timeOnlyTitle: "Choisir l'heure",
    timeText: "Heure",
    hourText: "Heures",
    minuteText: "Minutes",
    secondText: "Secondes",
    millisecondText: "Millisecondes",
    year: "Année",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    list: "Agenda",
    allDayText: "Toute la journée",
    moreLinkText: "Plus...",
    noEventsText: "Pas d'événements",
    aria: {
      "datatable.sort.ASC": "activer pour trier la colonne dans l'ordre croissant",
      "datatable.sort.DESC": "activer pour trier la colonne dans l'ordre décroissant",
      "datatable.sort.NONE": "activer pour retirer le tri sur la colonne",
      "colorpicker.OPEN": "Ouvrir le sélecteur de couleur",
      "colorpicker.CLOSE": "Fermer le sélecteur de couleur",
      "colorpicker.CLEAR": "Effacer la couleur sélectionnée",
      "colorpicker.MARKER": "Saturation: {s}. Luminosité: {v}.",
      "colorpicker.HUESLIDER": "Curseur de teinte",
      "colorpicker.ALPHASLIDER": "Curseur d'opacité",
      "colorpicker.INPUT": "Valeur du champ couleur",
      "colorpicker.FORMAT": "Format de couleur",
      "colorpicker.SWATCH": "Nauncier",
      "colorpicker.INSTRUCTION": "Sélecteur de saturation et de luminosité. Utilisez les touches fléchées haut, bas, gauche et droite pour sélectionner.",
      "spinner.INCREASE": "Augmenter la valeur",
      "spinner.DECREASE": "Diminuer la valeur",
      "switch.ON": "Sur",
      "switch.OFF": "Arrêt",
      "messages.ERROR": "Erreur",
      "messages.FATAL": "Fatal",
      "messages.INFO": "Information",
      "messages.WARN": "Avertissement",
    },
    messages: {
      // components
      "javax.faces.component.UIInput.CONVERSION": "{0} : une erreur de conversion s'est produite.",
      "javax.faces.component.UIInput.REQUIRED": "{0} : Erreur de validation : la valeur est requise.",
      "javax.faces.component.UIInput.UPDATE": "{0} : Une erreur s'est produite lors du traitement des informations que vous avez saisies.",
      "javax.faces.component.UISelectOne.INVALID": "{0} : Erreur de validation : la valeur n'est pas valide.",
      "javax.faces.component.UISelectMany.INVALID": "{0} : Erreur de validation : la valeur n'est pas valide.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal sign\u00e9.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal sign\u00e9 compos\u00e9 de z\u00e9ro ou plusieurs chiffres, lesquels peuvent \u00eatre suivis d'une d\u00e9cimale et d'une fraction.  Exemple : {1}",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres. Exemple : {1}",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1} : '{0}' doit \u00eatre 'true' ou 'false'.",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1} : '{0}' doit \u00eatre 'true' ou 'false'.  Toute valeur autre que 'true' sera \u00e9valu\u00e9e comme 'false'.",
      "javax.faces.converter.ByteConverter.BYTE": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compris entre 0 et 255.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compris entre 0 et 255.  Exemple : {1}",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1} : '{0}' doit \u00eatre un caract\u00e8re valide.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1} : '{0}' doit \u00eatre un caract\u00e8re ASCII valide.",
      "javax.faces.converter.DateTimeConverter.DATE": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une date.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une date. Exemple : {1}",
      "javax.faces.converter.DateTimeConverter.TIME": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une heure.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une heure. Exemple : {1}",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une date et une heure.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une date et une heure. Exemple : {1}",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1} : Un attribut 'pattern' ou 'type' doit \u00eatre sp\u00e9cifi\u00e9 pour la conversion de la valeur '{0}'.",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre 4,9E-324 et 1,7976931348623157E308. Exemple : {1}",
      "javax.faces.converter.EnumConverter.ENUM": "{2} : '{0}' doit \u00eatre convertible en \u00e9num\u00e9ration.",
      "javax.faces.converter.EnumConverter.ENUM_detail": "{2} : '{0}' doit \u00eatre convertible en \u00e9num\u00e9ration \u00e0 partir de l'\u00e9num\u00e9ration qui contient la constante '{1}'.",
      "javax.faces.converter.EnumConverter.ENUM_NO_CLASS": "{1} : '{0}' doit \u00eatre convertible en \u00e9num\u00e9ration \u00e0 partir de l'\u00e9num\u00e9ration, mais aucune classe d'\u00e9num\u00e9ration n'a \u00e9t\u00e9 fournie.",
      "javax.faces.converter.EnumConverter.ENUM_NO_CLASS_detail": "{1} : '{0}' doit \u00eatre convertible en \u00e9num\u00e9ration \u00e0 partir de l'\u00e9num\u00e9ration, mais aucune classe d'\u00e9num\u00e9ration n'a \u00e9t\u00e9 fournie.",
      "javax.faces.converter.FloatConverter.FLOAT": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre 1,4E-45 et 3,4028235E38. Exemple : {1}",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre -2147483648 et 2147483647. Exemple : {1}",
      "javax.faces.converter.LongConverter.LONG": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
      "javax.faces.converter.LongConverter.LONG_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre -9223372036854775808 et 9223372036854775807. Exemple : {1}",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une devise.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme une devise. Exemple : {1}",
      "javax.faces.converter.NumberConverter.PERCENT": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme un pourcentage.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2} : '{0}' n'a pu \u00eatre interpr\u00e9t\u00e9 comme un pourcentage. Exemple : {1}",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' n'est pas un nombre.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' n'est pas un nombre. Exemple : {1}",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' n'est pas un mod\u00e8le de nombre.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' n'est pas un mod\u00e8le de nombre. Exemple : {1}",
      "javax.faces.converter.ShortConverter.SHORT": "{2} : '{0}' doit \u00eatre un nombre d\u00e9cimal compos\u00e9 d'un ou plusieurs chiffres.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2} : '{0}' doit \u00eatre un nombre compris entre -32768 et 32767. Exemple : {1}",
      "javax.faces.converter.STRING": "{1} : Impossible de convertir '{0}' en cha\u00eene.",
      "javax.faces.validator.NOT_IN_RANGE": "Erreur de validation : l'attribut sp\u00e9cifi\u00e9 n'est pas compris entre les valeurs attendues de {0} et de {1}.",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1} : Erreur de validation : la valeur est sup\u00e9rieure au maximum autoris\u00e9 de '{0}'",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1} : Erreur de validation : la valeur est inf\u00e9rieure au minimum autoris\u00e9 de '{0}'",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2} : Erreur de validation : l'attribut sp\u00e9cifi\u00e9 n'est pas compris entre les valeurs attendues de {0} et de {1}.",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0} : Erreur de validation : la valeur n'est pas du bon type.",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1} : Erreur de validation : la valeur est sup\u00e9rieure au maximum autoris\u00e9 de '{0}'",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1} : Erreur de validation : la valeur est inf\u00e9rieure au minimum autoris\u00e9 de '{0}'",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1} : Erreur de validation : la valeur est sup\u00e9rieure au maximum autoris\u00e9 de '{0}'",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1} : Erreur de validation : la valeur est inf\u00e9rieure au minimum autoris\u00e9 de '{0}'",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2} : Erreur de validation : l'attribut sp\u00e9cifi\u00e9 n'est pas compris entre les valeurs attendues de {0} et de {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0} : Erreur de validation : la valeur n'est pas du bon type.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "{1} : Erreur de validation : la valeur ne correspond pas au mod\u00e8le '{0}'",
      "javax.faces.validator.BeanValidator.MESSAGE": "{1} : {0}",
      "primefaces.FileValidator.FILE_LIMIT": "Nombre maximum de fichiers dépassé.",
      "primefaces.FileValidator.FILE_LIMIT_detail": "Nombre maximum : {0}.",
      "primefaces.FileValidator.ALLOW_TYPES": "Type de fichier invalide.",
      "primefaces.FileValidator.ALLOW_TYPES_detail": "Type de fichier invalide : '{0}'. Types autorisés : '{1}'.",
      "primefaces.FileValidator.SIZE_LIMIT": "Taille de fichier invalide.",
      "primefaces.FileValidator.SIZE_LIMIT_detail": "Le fichier '{0}' ne doit pas être plus grand que {1}.",
    },
  });
}
