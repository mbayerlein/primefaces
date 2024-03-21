if (window.PrimeFaces) {
  /** Malaysia (from PrimeLocale)*/
  PrimeFaces.locales["ms"] = {
    accept: "Ya",
    addRule: "Tambah Peraturan",
    am: "AM",
    apply: "Terapkan",
    cancel: "Batal",
    choose: "Pilih",
    chooseDate: "Pilih Tarikh",
    chooseMonth: "Pilih Bulan",
    chooseYear: "Pilih Tahun",
    clear: "Padam",
    completed: "Telah Selesai",
    contains: "Mengandungi",
    custom: "Khas",
    dateAfter: "Tarikh selepas",
    dateBefore: "Tarikh sebelum",
    dateFormat: "dd/mm/yyyy",
    dateIs: "Tarikh adalah",
    dateIsNot: "Tarikh bukan",
    dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
    dayNamesMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"],
    dayNamesShort: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
    emptyFilterMessage: "Tiada hasil carian",
    emptyMessage: "Tiada pilihan yang tersedia",
    emptySearchMessage: "Tiada hasil carian",
    emptySelectionMessage: "Tiada item yang dipilih",
    endsWith: "Berakhir dengan",
    equals: "Sama",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Tapis",
    firstDayOfWeek: 0,
    gt: "Lebih daripada",
    gte: "Lebih daripada atau sama dengan",
    lt: "Kurang daripada",
    lte: "Kurang daripada atau sama dengan",
    matchAll: "Padanan Semua",
    matchAny: "Padanan Mana-mana",
    medium: "Sederhana",
    monthNames: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ogos", "Sep", "Okt", "Nov", "Dis"],
    nextDecade: "Dekade Berikutnya",
    nextHour: "Jam Berikutnya",
    nextMinute: "Minit Berikutnya",
    nextMonth: "Bulan Berikutnya",
    nextSecond: "Saat Berikutnya",
    nextYear: "Tahun Berikutnya",
    noFilter: "Tiada Tapisan",
    notContains: "Tidak mengandungi",
    notEquals: "Tidak sama",
    now: "Sekarang",
    passwordPrompt: "Masukkan kata laluan",
    pending: "Menunggu",
    pm: "PM",
    prevDecade: "Dekade Sebelumnya",
    prevHour: "Jam Sebelumnya",
    prevMinute: "Minit Sebelumnya",
    prevMonth: "Bulan Sebelumnya",
    prevSecond: "Saat Sebelumnya",
    prevYear: "Tahun Sebelumnya",
    reject: "Tidak",
    removeRule: "Buang Peraturan",
    searchMessage: "{0} hasil carian tersedia",
    selectionMessage: "{0} item dipilih",
    showMonthAfterYear: false,
    startsWith: "Bermula dengan",
    strong: "Kuat",
    today: "Hari ini",
    upload: "Muat Naik",
    weak: "Lemah",
    weekHeader: "Minggu",
    aria: {
      cancelEdit: "Batal Pengemaskinian",
      close: "Tutup",
      collapseLabel: "Runtuh",
      collapseRow: "Baris Ditutup",
      editRow: "Kemaskini Baris",
      expandLabel: "Kembangkan",
      expandRow: "Baris Dibuka",
      falseLabel: "Salah",
      filterConstraint: "Tapis Sekatan",
      filterOperator: "Tapis Operator",
      firstPageLabel: "Muka Pertama",
      gridView: "Paparan Grid",
      hideFilterMenu: "Tutup Tapisan Menu",
      jumpToPageDropdownLabel: "Lompat ke Pilihan Halaman",
      jumpToPageInputLabel: "Lompat ke Input Halaman",
      lastPageLabel: "Muka Terakhir",
      listView: "Paparan Senarai",
      moveAllToSource: "Gerak Semua Ke Sumber",
      moveAllToTarget: "Gerak Semua Ke Sasaran",
      moveBottom: "Gerak Ke Paling Bawah",
      moveDown: "Gerak Ke Bawah",
      moveTop: "Gerak Ke Atas",
      moveToSource: "Gerak Ke Sumber",
      moveToTarget: "Gerak Ke Sasaran",
      moveUp: "Gerak Ke Paling Atas",
      navigation: "Navigasi",
      next: "Seterusnya",
      nextPageLabel: "Muka Seterusnya",
      nullLabel: "Tidak Dipilih",
      otpLabel: "Sila masukkan aksara kata laluan sekali {0}",
      pageLabel: "Muka {page}",
      passwordHide: "Sembunyikan Kata Laluan",
      passwordShow: "Tunjukkan Kata Laluan",
      previous: "Sebelumnya",
      previousPageLabel: "Muka Surat Sebelumnya",
      rotateLeft: "Putar Ke Kiri",
      rotateRight: "Putar Ke Kanan",
      rowsPerPageLabel: "Baris setiap halaman",
      saveEdit: "Simpan Pengemaskinian",
      scrollTop: "Scroll Ke Atas",
      selectAll: "Semua item dipilih",
      selectLabel: "Pilih",
      selectRow: "Baris Dipilih",
      showFilterMenu: "Buka Tapisan Menu",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      star: "1 bintang",
      stars: "{star} bintang",
      trueLabel: "Benar",
      unselectAll: "Semua item tidak dipilih",
      unselectLabel: "Nyahpilih",
      unselectRow: "Pilihan Baris Dibatalkan",
      zoomImage: "Zoom Imej",
      zoomIn: "Zoom Masuk",
      zoomOut: "Zoom Keluar",
    },
  };

  // custom PF labels
  PrimeFaces.locales["ms"] = $.extend(true, {}, PrimeFaces.locales["ms"], {
    allDayText: "Sepanjang hari",
    day: "Hari",
    hourText: "Jam",
    isRTL: false,
    list: "Agenda",
    millisecondText: "milisaat",
    minuteText: "minit",
    month: "bulan",
    moreLinkText: "Lagi...",
    noEventsText: "Tiada Acara",
    secondText: "Kedua",
    timeOnlyTitle: "Hanya masa",
    timeText: "Masa",
    unexpectedError: "Kesalahan yang tidak dijangka",
    week: "Minggu",
    weekNumberTitle: "W",
    year: "tahun",
    yearSuffix: "",
    aria: {
      "colorpicker.ALPHASLIDER": "Gelangsar kelegapan",
      "colorpicker.CLEAR": "Kosongkan warna yang dipilih",
      "colorpicker.CLOSE": "Tutup pemilih warna",
      "colorpicker.FORMAT": "Format warna",
      "colorpicker.HUESLIDER": "Gelangsar warna",
      "colorpicker.INPUT": "Medan nilai warna",
      "colorpicker.INSTRUCTION": "Pemilih ketepuan dan kecerahan. Gunakan kekunci anak panah atas, bawah, kiri dan kanan untuk memilih.",
      "colorpicker.MARKER": "Ketepuan: {s}. Kecerahan: {v}.",
      "colorpicker.OPEN": "Pemilih warna terbuka",
      "colorpicker.SWATCH": "swatch warna",
      "datatable.sort.ASC": "aktifkan untuk mengisih lajur menaik",
      "datatable.sort.DESC": "aktifkan untuk mengisih lajur menurun",
      "datatable.sort.NONE": "aktifkan untuk mengalih keluar pengisihan pada lajur",
      "messages.ERROR": "Ralat",
      "messages.FATAL": "Maut",
      "messages.INFO": "Maklumat",
      "messages.WARN": "Amaran",
      "spinner.DECREASE": "Kurangkan Nilai",
      "spinner.INCREASE": "Tingkatkan Nilai",
      "switch.OFF": "Mati",
      "switch.ON": "hidup",
    },
    messages: {
      "javax.faces.component.UIInput.REQUIRED": "{0}: Ralat Pengesahan: Nilai diperlukan.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: &#39;{0}&#39; mestilah nombor perpuluhan yang ditandatangani.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: &#39;{0}&#39; mestilah nombor perpuluhan bertanda yang terdiri daripada sifar atau lebih digit, yang mungkin diikuti dengan titik perpuluhan dan pecahan. Contoh: {1}.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: &#39;{0}&#39; mestilah nombor yang terdiri daripada satu atau lebih digit.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: &#39;{0}&#39; mestilah nombor yang terdiri daripada satu atau lebih digit. Contoh: {1}.",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: &#39;{0}&#39; mestilah &#39;benar&#39; atau &#39;palsu&#39;.",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: &#39;{0}&#39; mestilah &#39;benar&#39; atau &#39;palsu&#39;. Sebarang nilai selain daripada &#39;benar&#39; akan dinilai kepada &#39;palsu&#39;.",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: &#39;{0}&#39; mestilah nombor antara 0 dan 255.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: &#39;{0}&#39; mestilah nombor antara 0 dan 255. Contoh: {1}.",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: &#39;{0}&#39; mestilah aksara yang sah.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: &#39;{0}&#39; mestilah aksara ASCII yang sah.",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai tarikh.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai tarikh. Contoh: {1}.",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai tarikh dan masa.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai tarikh dan masa. Contoh: {1}.",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: Atribut &#39;corak&#39; atau &#39;jenis&#39; mesti ditentukan untuk menukar nilai &#39;{0}&#39;.",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai masa.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai masa. Contoh: {1}.",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: &#39;{0}&#39; mestilah nombor yang terdiri daripada satu atau lebih digit.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: &#39;{0}&#39; mestilah nombor antara 4.9E-324 dan 1.7976931348623157E308. Contoh: {1}.",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: &#39;{0}&#39; mestilah nombor yang terdiri daripada satu atau lebih digit.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: &#39;{0}&#39; mestilah nombor antara 1.4E-45 dan 3.4028235E38 Contoh: {1}.",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: &#39;{0}&#39; mestilah nombor yang terdiri daripada satu atau lebih digit.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: &#39;{0}&#39; mestilah nombor antara -2147483648 dan 2147483647. Contoh: {1}.",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai nilai mata wang.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai nilai mata wang. Contoh: {1}.",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai nombor.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai nombor. Contoh: {1}.",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai corak nombor.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai corak nombor. Contoh: {1}.",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai peratusan.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: &#39;{0}&#39; tidak dapat difahami sebagai peratusan. Contoh: {1}.",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: &#39;{0}&#39; mestilah nombor yang terdiri daripada satu atau lebih digit.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: &#39;{0}&#39; mestilah nombor antara -32768 dan 32767. Contoh: {1}.",
      "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Ralat Pengesahan: Nilai lebih besar daripada maksimum yang dibenarkan iaitu &#39;{0}&#39;.",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Ralat Pengesahan: Nilai kurang daripada minimum &#39;{0}&#39; yang dibenarkan.",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Ralat Pengesahan: Atribut yang ditentukan bukan antara nilai jangkaan {0} dan {1}.",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Ralat Pengesahan: Nilai bukan jenis yang betul.",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Ralat Pengesahan: Panjang lebih besar daripada maksimum yang dibenarkan iaitu &#39;{0}&#39;.",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Ralat Pengesahan: Panjang kurang daripada minimum &#39;{0}&#39; yang dibenarkan.",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Ralat Pengesahan: Nilai lebih besar daripada maksimum yang dibenarkan iaitu &#39;{0}&#39;.",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Ralat Pengesahan: Nilai kurang daripada minimum &#39;{0}&#39; yang dibenarkan.",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Ralat Pengesahan: Atribut yang ditentukan bukan antara nilai jangkaan {0} dan {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Ralat Pengesahan: Nilai bukan jenis yang betul.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Ralat dalam ungkapan biasa.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Ralat dalam ungkapan biasa, &#39;{0}&#39;.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "Corak Regex tidak sepadan.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "Corak regex &#39;{0}&#39; tidak sepadan.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Corak regex mesti ditetapkan.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Corak regex mesti ditetapkan kepada nilai bukan kosong.",
      "javax.validation.constraints.AssertFalse.message": "mesti palsu.",
      "javax.validation.constraints.AssertTrue.message": "mesti betul.",
      "javax.validation.constraints.DecimalMax.message": "mestilah kurang daripada atau sama dengan {0}.",
      "javax.validation.constraints.DecimalMin.message": "mestilah lebih besar daripada atau sama dengan {0}.",
      "javax.validation.constraints.Digits.message": "nilai berangka di luar sempadan (&lt;{0} digit&gt;.&lt;{1} digit&gt; dijangka).",
      "javax.validation.constraints.Future.message": "mestilah pada masa hadapan.",
      "javax.validation.constraints.Max.message": "mestilah kurang daripada atau sama dengan {0}.",
      "javax.validation.constraints.Min.message": "mestilah lebih besar daripada atau sama dengan {0}.",
      "javax.validation.constraints.NotNull.message": "mungkin tidak batal.",
      "javax.validation.constraints.Null.message": "mesti batal.",
      "javax.validation.constraints.Past.message": "mesti masa lalu.",
      "javax.validation.constraints.Pattern.message": "mesti sepadan dengan &#39;{0}&#39;.",
      "javax.validation.constraints.Size.message": "saiz mestilah antara {0} dan {1}.",
      "primefaces.FileValidator.ALLOW_TYPES": "Jenis fail tidak sah.",
      "primefaces.FileValidator.ALLOW_TYPES_detail": "Jenis fail tidak sah: &#39;{0}&#39;. Jenis yang dibenarkan: &#39;{1}&#39;.",
      "primefaces.FileValidator.FILE_LIMIT": "Bilangan maksimum fail melebihi.",
      "primefaces.FileValidator.FILE_LIMIT_detail": "Nombor maksimum: {0}.",
      "primefaces.FileValidator.SIZE_LIMIT": "Saiz fail tidak sah.",
      "primefaces.FileValidator.SIZE_LIMIT_detail": "Fail &#39;{0}&#39; mestilah tidak lebih besar daripada {1}.",
    },
  });
}
