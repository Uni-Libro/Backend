'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          id: 1,
          name: 'آنک نام گل',
          image_url: 'https://www.iranketab.ir/Images/ProductImages/5241ed20c8d242a1918e72cff01f90fe.jpg',
          description:
            'کتاب آنک نام گل یا «نام گل سرخ» رمانی نوشته‌ی اومبرتو اکو است. این کتاب اولین و هنوز هم پرفروش‌ترین رمان این نویسنده و نظریه‌پرداز ایتالیایی است. اتفاقات کتاب آنک نام گل در سال‌های آخر قرون وسطی و در سال ۱۳۲۷ میلادی در اروپای شلوغ اتفاق می‌افتد.',
          price: 129250,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'میدگارد ۱',
          image_url: 'https://ketabcity.com/BookImages/9786006357720.jpg',
          description:
            'موضوع رمان حول محور زندگی پرماجرای پسری خوش سیما و بلند قامت، اما غیره عادی می گردد که بزودی درمیابد یکی از والدین او غیره آدمیزاد بوده و این موضوع زندگی او را وارد جنگی ناخواسته با موجودات اهریمنی و ماورائی می کند.',
          price: 54000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'وقتی نیچه گریست',
          image_url: 'https://img.taaghche.com/frontCover/70533.jpg?w=400',
          description:
            'کتاب رمان وقتی نیچه گریست نوشته اروین د یالوم، روان‌پزشک و استاد دانشگاه استنفورد، می باشد که در سال ۱۹۹۲ به زبان انگلیسی منتشر شد. این کتاب روایتی از روانکاوی افراد مهم و سرشناس قرن ۱۹ مانند نیچه است. این کتاب تلفیقی از خیال و واقعیت است. داستان از دیدار خیالی نیچه، فیلسوف آلمانی، و دکتر برویر که یک روان درمانگر است شروع می‌شود‌.',
          price: 148000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'دختری که رهایش کردی',
          image_url: 'https://taaghche.com/images/bookPage/binahayat.png',
          description:
            'کتاب دختری که رهایش کردی رمان عاشقانه‌ای از جوجو مویز است. این کتاب داستان تأثیرگذار یک نقاشی مربوط به دوران جنگ جهانی اول است که زندگی و سرنوشت دو انسان و کشور را به هم ربط می‌دهد.',
          price: 125600,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'دختری با هفت اسم',
          image_url: 'https://www.iranketab.ir/Images/ProductImages/5d5845d0c87e476aa2f0e698aa1ba6be.jpg',
          description:
            'کتاب دختری با هفت اسم نوشته‌ی هیئون سئو لی و داستان فرار یکی دیگر از انسان‌هایی است که در حصاری دردناک و تاریک و در زندانی بزرگ و خوف‌آور به اسم «کره‌ی شمالی» روزگار می‌گذراندند. یک رژیم کمونیست و ستمگر که مدت‌ها کشور خود را برای مردم چشم و گوش بسته و از همه‌جا بی‌خبر خود، بهترین کشور روی زمین معرفی کرده‌ و سال‌ها آنها را شست‌وشوی مغزی داده‌ بود.',
          price: 124000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: 'قصه‌ی دلبری',
          image_url: 'https://static.bookroom.ir/file/cache/attach/image/201801/44261_365_500.jpg',
          description:
            'کتاب قصه‌ی دلبری، روایتی متفاوت و خواندنی از زندگی شهید محمدحسین محمدخانی است. او از فعالان بسیج دانشجویی بود و در علمیات‌های تفحص پیکر شهدای دفاع مقدس، شرکت می‌کرد، کتاب قصه دلبری، روایتی از سبک زندگی این شهید است که همسرش از روزهای آشنایی در بسیج دانشجویی تا روزهای پس از شهادت او را بازگو می‌کند. او با ماجراهایی که در دانشگاه داشتند کتاب قصه دلبری را آغاز می‌کند و از خواستگاری‌های پی‌ در پی او می‌گوید. تا به زمانی که می‌رسد که نظرش عوض می‌شود و تصمیم می‌گیرد که به این خواستگار جواب مثبت بدهد.',
          price: 5500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: 'حرمسرای قذافی',
          image_url: 'https://img.taaghche.com/frontCover/41041.jpg',
          description:
            'در دنیا انسان‌های زیادی بوده‌اند که خود را مسئول جان و مال دیگران دانسته‌اند. دیکتاتور‌هایی که به‌خاطر قدرتشان آرزو‌های دیگران را خراب می‌کنند. وقتی می‌خواهیم رهبرانی وحشتناک در تاریخ را نام ببریم، نام کسانی مثل: استالین، لنین، هیتلر، مائو به ذهنمان می‌آید. سال‌ها قبل در لیبی دیکتاتوری حکومت می‌کرد که ویژگی‌های پنهانی در شخصیتش داشت که ماجرای هولناکی را به تصویر می‌کشید، اتفاقی که باور کردنش در قرن بیست و یکم بسیار دشوار است. در کتاب حرمسرای قذاقی نوشته‌ی آنیک کوژان رازهایی از زمان حکومت معمر قذاقی را می‌خوانیم.',
          price: 100000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name: 'ترجمه الغارات',
          image_url: 'https://img.taaghche.com/frontCover/120582.jpg',
          description:
            'کتاب ترجمه الغارات نوشتۀ ابراهیم بن محمد ثقفی و ترجمۀ سیدمحمود زارعی است. نشر بیان معنوی این کتاب را منتشر کرده است. کتاب، روایت‌گرِ سال‌های روایت‌ نشده از حکومت امیرالمومنین (ع) است؛ سال‌هایی که به دورۀ غارات مشهور هستند.',
          price: 20000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          name: 'شازده کوچولو',
          image_url: 'https://img.ketabrah.ir/img/l/1924824247301830.jpg',
          description:
            'کتاب شازده کوچولو افسانه‌ا‌ی مدرن‌کلاسیک است که توسط هوانورد و نویسنده‌ی فرانسوی، آنتوان دوسنت اگزوپری نوشته شده و در سال ۱۹۴۳ با تصویرسازی خودش منتشر شده است. این کتاب به زبانی ساده، داستان کودکی مشهور به شازده کوچولو را روایت می‌کند که برای کسب خرد در جهان سفر می‌کند. این رمان به صدها زبان ترجمه شده، حدود ۲۰۰ میلیون نسخه در سراسر جهان به فروش رفته و به عنوان یکی از پرفروش‌ترین کتاب‌های تاریخ شناخته می‌شود.',
          price: 72250,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          name: 'جزء از کل',
          image_url: 'https://fidibo.com/images/books/97567_24554_normal.jpg',
          description:
            'کتاب پرفروش جزء از کل اثر استیو تولتز، یک داستان جالب پدر و پسری است که پر از ماجراهای طنز و شخصیت‌های بیادماندنی است. جزء از کل پس از انتشار در سال ۲۰۰۸ با استقبال زیادی روبه‌رو شد و توانست نامزد نهایی بوکر شود. این نامزدی برای کسی که اولین رمانش را نوشته است اتفاق بزرگی محسوب می‌شد هرچند کتاب «ببر سفید» اثر آراويند آديگا برنده جایزه شد. تولتز این کتاب را در مدت ۵ سال نوشته است.',
          price: 34500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          name: 'آب‌نبات پسته‌ای',
          image_url: 'https://img.taaghche.com/frontCover/15842.jpg',
          description:
            'محسن قهرمان داستان آبنبات پسته‌ای نوجوانی بازیگوش، سر زبان‌دار و اهل بجنورد است. خواهر محسن ملیحه نام دارد و خواستگارهای مختلفی دارد که محسن ماجراهای جالبی را با آن‌ها پشت سر می‌گذارد. مهرداد صدقی در کتاب آبنبات پسته‌ای رویدادهای مهم تاریخی بین سال‌های 70 و 72 را روایت می‌کند. این اتفاقات که در کوچه «سیدی» شهر بجنورد رخ می‌دهند، تاثیر بسزایی بر زندگی محسن، خانواده وی و همسایگانش می‌گذارند.',
          price: 127500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          name: 'مزرعه‌ حیوانات',
          image_url: 'https://img.ketabrah.ir/img/l/9491739928441855.jpg',
          description:
            'کتاب مزرعه حیوانات که ممکن است آن را با نام قلعه حیوانات بشناسید، یکی از مشهورترین رمان‌های جُرج اُرول نویسنده مشهور انگلیسی هندی است. مزرعه حیوانات در قالب یک داستان نمادین، تصویری از یک حکومت دیکتاتوری را برایمان ترسیم می‌کند. این کتاب با ترجمه سیروس نورآبادی و محسن موحدی‌زاد، از محصولات انتشارات شورآفرین است.',
          price: 74500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          name: 'علوم و فنون ادبی جامع؛ دهم، یازدهم، دوازدهم',
          image_url: 'https://cdn.ketabchi.com/products/4212/images/ketab-school-book-nm41d.jpg',
          description: 'کتاب الکترونیکی «علوم و فنون ادبی جامع؛ دهم، یازدهم، دوازدهم» از اصغر بهرامی - انتشارات تخته سیاه.',
          price: 100000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 14,
          name: 'گام به گام دروس دوازدهم تجربی؛ هویت اجتماعی',
          image_url: 'https://media.chibekhoonam.net/2019/09/9789643786427-.jpg',
          description:
            'کتاب گام به گام دروس دوازدهم تجربی؛ هویت اجتماعی برمبنای بخش‌های کتاب و موضوعات آن طراحی شده و شامل نکات، یادآوری، حواشی، پاورقی‌ها برای توضیحات بیشتر و سوالات است.',
          price: 3600,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 15,
          name: 'گام به گام دروس دهم انسانی؛ جامعه شناسی',
          image_url: 'https://bistakketab.ir/Upload/products/6f8b3d88e6e04662ab0b583ea5cd0adc.jpg',
          description: 'کتاب گام به گام دروس دهم انسانی؛ جامعه شناسی یکی از کتاب‌های کمک‌آموزشی خیلی سبز برای دانش‌آموزان پایهٔ دهم انسانی است.',
          price: 6500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 16,
          name: 'المپیادهای شیمی آمریکا (آزمون های ملی)',
          image_url:
            'https://uniketab.com/wp-content/uploads/2022/12/%D8%A7%D9%84%D9%85%D9%BE%DB%8C%D8%A7%D8%AF-%D8%B4%DB%8C%D9%85%DB%8C-%D8%A2%D9%85%D8%B1%DB%8C%DA%A9%D8%A7-%D9%85%D8%B3%D8%A7%D8%A8%D9%82%D8%A7%D8%AA-%D9%85%D9%84%DB%8C-%D9%86%D8%B4%D8%B1-%DA%AF%DA%86.jpg',
          description:
            'کتاب المپیادهای شیمی آمریکا (آزمون های ملی) با تألیف و ترجمهٔ مریم دهقان و مهدی قربانی و رضا کریمی و نظارت مرتضی خلینا در انتشارات گچ چاپ شده است. این کتاب پاسخ‌های تشریحی سؤالات را نیز دربر دارد. ',
          price: 70000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 17,
          name: 'شاگرد اول ها',
          image_url: 'https://nahang.ir/images/products/book_797179.jpg',
          description:
            'داستان و طریقهٔ شکل‌گرفتن این کتاب را از زبان سیدسعید آریانژاد می‌خوانیم: «در خانه نشسته بودم و یادم نیست چه‌کار می‌کردم که تلفن همراهم صدایم کرد.',
          price: 67500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 18,
          name: 'هفدهمین روز',
          image_url: 'https://nashreshahidkazemi.ir/1320-large_default/%D9%87%D9%81%D8%AF%D9%87%D9%85%DB%8C%D9%86-%D8%B1%D9%88%D8%B2.jpg',
          description: 'کتاب الکترونیکی «هفدهمین روز» از فاطمه عالمی و محمدحسین بارونقی - نشر شهید کاظمی.',
          price: 40000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 19,
          name: 'نماز ناتمام',
          image_url: 'https://static.bookroom.ir/file/cache/attach/image/202212/47584-04332872-0D6A-462A-AAE0-DB06039C34BE_334_500.jpg',
          description: 'کتاب الکترونیکی «نماز ناتمام» از مرتضی سمیعی نیا و کمیل کمالی - نشر شهید کاظمی.',
          price: 50000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 20,
          name: 'گنجینه رنج',
          image_url: 'https://nashreshahidkazemi.ir/1313-home_default/%DA%AF%D9%86%D8%AC%DB%8C%D9%86%D9%87-%D8%B1%D9%86%D8%AC.jpg',
          description: 'کتاب الکترونیکی «گنجینه رنج» از رضیه غبیشی و فهیمه اسماعیلی - نشر شهید کاظمی.',
          price: 47000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 21,
          name: 'عادت های اتمی',
          image_url: 'https://nashrenovin.ir/wp-content/uploads/2019/04/%D8%B9%D8%A7%D8%AF%D8%AA-%D9%87%D8%A7%DB%8C-%D8%A7%D8%AA%D9%85%DB%8C.jpg',
          description:
            'جیمز کلیر در کتاب عادت های اتمی به تاثیر تغی یرات کوچک در زندگی پرداخته است. چرایی این تاثیرات را توضیح داده، گام‌های ساده‌ای برای ساختن عادات بهتر معرفی کرده و در نهایت راز ماندگاری نتایج مثبت حاصل از تغییرات کوچک در زندگی را برای خوانندگانش بیان کرده است. کتاب عادت های اتمی، با سبکی جالب و روان، به ما یاد می دهد که چگونه با شناخت عادت‌های کوچک و مدیریت این عادت‌ها، هر روز یک درصد بهتر شویم. هر روز یک درصد بهتر شدن، معادل سالی ۳۷برابر بهتر شدن است. به قول جیمز کلیر، همین رفتارها و عادت‌های کوچک است که تعیین می‌کند ۵ سال بعد کجا هستیم و چقدر موفق شده‌ایم یا شکست خورده‌ایم!',
          price: 64700,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 22,
          name: 'هنر ظریف رهایی از دغدغه‌ها',
          image_url: 'https://img.ketabrah.ir/img/l/8628858348049540.jpg',
          description:
            'کتاب هنر ظریف رهایی از دغدغه‌ها، اثر مارک منسن، کتابی جذاب و غافلگیر کننده است که روشی نوین برای خوب زندگی کردن را به ما می‌آموزد. این کتاب به شما یاد نمی‌دهد چگونه به دست بیاورید، بلکه قصد دارد نشان دهد که چطور ببازید و رها کنید.',
          price: 77600,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 23,
          name: 'کاش وقتی بیست‌ساله بودم می‌دانستم',
          image_url: 'https://www.iranketab.ir/Images/ProductImages/eac4f6e054794aa5a9d81c277c1a42c4.jpg',
          description:
            'کتاب بر اساس داستان‌هایی از موفقیت و شکست نوشته شده است. داستان‌هایی که نویسنده در کلاس‌های درس خود به عنوان استاد دانشگاه و پیش از آن به عنوان پژوهشگر، کارآفرین و مشاور مدیریتی تجربه کرده است و داستان‌هایی که کارآفرینان، مربیان، مدیران و.... برای او تعریف کرده‌اند',
          price: 20000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 24,
          name: 'زنان زیرک؛ چرا مردان عاشق زنان زیرک می‌شوند؟',
          image_url: 'https://img.taaghche.com/frontCover/37373.jpg',
          description:
            'زنان زیرک کتابی اثر شری آرگو است. موضوع کتاب زنان زیرک این سوال است: چرا مردان عاشق زنان زیرک می‌شوند؟ شری آرگو در زنان زیرک، از بعد روانشناسی به روابط بین زنان و مردان نگاه کرده است. او به جای تکیه بر تصویری رؤیایی و ایده‌آلیستی از روابط دو جنس مخالف، تصویری واقع‌گرایانه از طرز فکر و خواسته‌های مردان و رفتارهای درست یا نادرست زنان به ما ارائه می‌دهد و باوجود تعداد اندک نکاتی که با فرهنگ ما همخوانی ندارند، کتاب پر است از نکات آموزنده و جالبی که می‌توانند در زندگی هر روزه به کار بیایند.',
          price: 80750,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 25,
          name: 'ابن مشغله (داستان یک زندگی، جلد اول)',
          image_url: 'https://img.taaghche.com/frontCover/12209.jpg',
          description:
            'کتاب ابن مشغله را می‌توان گفت که به نوعی زندگینامه نادر ابراهیمی است اما نه آن چنان که خاطرات روزمره‌اش را ثبت کند بلکه حول محور اشتغال نوشته شده است.',
          price: 48000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 26,
          name: 'انسان در جست‌وجوی معنا',
          image_url: 'https://img.ketabrah.ir/img/l/5538560654584982.jpg',
          description:
            'انسان در جستجوی معنا، کتابی است که بر پایه‌ی تجربیات فاجعه‌بار ویکتور فرانکل در اردوگاه‌های کار اجباری آشویتس نوشته شده است. ویکتور فرانکل در این دوران، پدر و مادر، همسر و برادرش را از دست داد. خواهر او تنها کسی بود که از این وضعیت نجات پیدا کرد. با وجود تمام سختی‌ها، رنجی که می‌کشیدند، گرسنگی، سرما، بی‌رحمی و خشونتی که در اطرافشان موج می‌زد، اما او باز هم زندگی را شایسته و ارجمند می‌دید. در بخش دوم کتاب انسان در جستجوی معنا، او از خاطرات مراجعانش نوشته است. او با تجربیات گسترده‌ای که در زمینه‌ی کار و درمان بر اساس معنادرمانی به دست آورده است، متوجه این موضوع شد که برای هر فرد باید رسالت و وظیفه‌ای وجود داشته باشد که بخواهد عمرش را صرف آن کند.',
          price: 49500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 27,
          name: 'آخرین دختر',
          image_url: 'https://img.ketabrah.ir/img/l/5644260976902750.jpg',
          description:
            'کتاب آخرین دختر با بخشی به نام «متن سخنرانی من در زمان دریافت جایزهٔ نوبل صلح ۲۰۱۸» آغاز می‌شود. سپس پیش‌درآمدی به قلم امل کلونی، وکیل دادگستری، می‌خوانیم. این کتاب در ۳ بخش و بخشی به‌عنوان بخش پایانی نوشته شده است.',
          price: 100000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 28,
          name: 'نیم‌دانگ پیونگ‌یانگ',
          image_url: 'https://img.taaghche.com/frontCover/80834.jpg',
          description:
            'کره‌ی شمالی کشوری عجیب و پر رمز و راز است. از آن جهت که این کشور برای مردم دنیا جای ناشناخته‌ای است و اخباری که از آن به گوش می‌رسد هم عجیب و باورنکردنی است. از طرف دیگر کره‌ی شمالی که ارتباطش را با تمام دنیا قطع کرده است و مردمش را هم از ارتباط با دنیا منع کرده است، خود بر این باورها صحه می‌گذارد. همین موضوع عدم ارتباط با جهان خارج باعث شده تا روایت‌های ضد و نقیضی از این کشور در دسترس ما باشد. هنوز هم نمی‌دانیم واقعا کیفیت زیست مردم کره شمالی چطور است و آیا آن‌ها در یک کلام «خوشحال» هستند یا نه!',
          price: 100000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 29,
          name: 'درباره معنی زندگی',
          image_url: 'https://img.ketabrah.ir/img/l/8177876889548882.jpg',
          description:
            'ویل دورانت، ماجرای نوشتن کتاب درباره معنی زندگی را اینطور تعریف می‌کند. روزی مردی شیک‌پوش به سراغش می‌آید و به او می‌گوید که قصد خودکشی دارد. او تلاش می‌کند تا با راهکارهای مختلف مثل پیدا کردن شغل یا خوردن یک وعده غذای عالی او را از تصمیمش منصرف کند. مرد شیک‌پوش هم شغل خوبی دارد و هم گرسنه نیست. او از موضوع دیگری رنج می‌برد. موضوعی که دستمایه‌ی نوشتن این کتاب قرار می‌گیرد. ویل دورانت برای اینکه بتواند انگیزه‌ی زندگی کردن را پیدا کند، با آدم‌ها و افراد بسیاری درباره‌ معنی زندگی حرف می‌زند. ',
          price: 32500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 30,
          name: 'مغالطه‌های پرکاربرد، ۴۴ ترفند کثیف برای برنده شدن در بحث‌ها',
          image_url: 'https://img.taaghche.com/frontCover/23193.jpg',
          description:
            '«مغالطه‌های پرکاربرد، ۴۴ ترفند کثیف برای برنده‌شدن در بحث‌ها» به قلم «ریچارد پل» و «لیندا الدر»، جلد سوم از مجموعهٔ «راهنمای اندیشه‌ورزان» است که به چهل و چهار روش فریب‌دادن برای پیروزی در بحث و مشاجره پرداخته و مفهوم مغالطه و مغالطه‌گری در بحث را به‌صورت گسترده توضیح داده است. این کتاب با ترجمهٔ مهدی خسروانی در نشر نو چاپ شده است.',
          price: 25200,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 31,
          name: 'دنیای سوفی',
          image_url: 'https://upload.wikimedia.org/wikipedia/fa/a/a2/Donyaye_Sufi_Book.Jpg',
          description:
            'کتاب دنیای سوفی، داستانی جذاب و خواندنی از رمان تاریخ حکمت غرب به قلم یوستاین گاآردر است که تاریخ فلسفه را به زبان ساده برای نوجوانان تشریح می‌کند. دنیای سوفی را دکتر مهدی سمسار به فارسی برگردانده است.',
          price: 165750,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 32,
          name: 'فلسفه‌ای برای زندگی: رواقی زیستن در دنیای امروزی',
          image_url: 'https://img.taaghche.com/frontCover/5293.jpg',
          description:
            'ویلیام بی. اروین در کتاب صوتی فلسفه‌ای برای زندگی، شما را با مکتب فلسفی رواقی آشنا می‌کند و با بررسی آموزه‌ها و حکمت‌های آن، راهکارهایی برای انسان مدرن امروزی ارائه می‌دهد تا بتواند زندگی شاد، پر آرامش و معنادارتری داشته باشد.',
          price: 83300,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 33,
          name: 'دختری که ماه را نوشید',
          image_url: 'https://img.ketabrah.ir/img/l/5990863358356235.jpg',
          description:
            'کتاب دختری که ماه را نوشید نوشته کلی بارن هیل و ترجمه‌ی فروغ منصور قناعی استکه توسط انتشارات پرتقال به چاپ رسیده است. این رمان جذاب در لیست پرفروش‌ترین‌های نیویورک تایمز قرار گرفته و داستان زندگی عجیب یک دختربچه را به تصویر می‌کشد.',
          price: 75200,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 34,
          name: 'موش کوچولو',
          image_url: 'https://www.iranketab.ir/Images/ProductImages/edc66f4224dd448090d2ea5acbc67c75.jpg',
          description:
            'موش کوچولو و دوستانش به سیاهچالی ترسناک در قلعه‌ای پرزرق و برق سفر می‌کنند؛ قلعه‌ای که شاهزاده خانم در آن زندگی می‌کند و موش کوچولو عاشق شاهزاده خانم می‌شود! اما در این سفر چه بر سر آن‌ها می‌آید و این عشق چه سرانجامی خواهد داشت؟',
          price: 16000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 35,
          name: 'آخرین قصه گوی زمین',
          image_url: 'https://porteghal.co/uploads/Last-Cuentista.jpg',
          description:
            'در سال ۲۰۶۱، تشعشعات خورشیدی زمین و ساکنینش را درست در مسیر دنباله‌دار هالی قرار داده است. «پترا پنیا» دختری ۱۲ساله است که دوست دارد جا پای مادربزرگ قصه‌گویش بگذارد و به یک داستان‌سرا تبدیل شود. او خود را به یکی از آخرین سفینه‌هایی می‌رساند که در حال ترک زمین هستند. در این سفینه اعضای گروهی خطرناک به نام انجمن حضور دارند. وقتی «پترا» قرن‌ها بعد و در مقصد از خواب برمی‌خیزد، به‌سرعت درمی‌یابد که «انجمن»، خاطرات مسافران را از‌ بین‌ برده است. او اکنون آخرین قصه‌گوی زمین است و باید از هوش خود و داستان‌های فولکلور مکزیکی استفاده کند تا انسان‌های باقی‌مانده را نجات دهد و اجازه ندهد خودش به همین سرنوشت دچار شود.',
          price: 47600,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 36,
          name: 'جنگی که نجاتم داد',
          image_url: 'https://www.porteghaal.com/uploads/Thewar-4Spot.jpg',
          description:
            'کتاب جنگی که نجاتم داد نوشته کیمبرلی بروبیکر بردلی و ترجمه مرضیه ورشوساز است. کتاب جنگی که نجاتم داد را انتشارات پرتقال منتشر کرده است، این انتشارات با هدف نشر بهترین و با کیفیت‌ترین کتاب‌ها برای کودکان و نوجوانان تاسیس شده است. پرتقال بخشی از انتشارات بزرگ خیلی سبز است.',
          price: 66400,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 37,
          name: 'طراحی گرافیک گشتالتی (۱)',
          image_url: 'https://img.ketabrah.ir/img/l/9033305357243514.jpg',
          description:
            'مفهوم گشتالت چیست؟ گشتالت مکتبی روان‌شناسی است که در اوایل قرن بیستم در آلمان بوجود آمد. این دوره با اوج گیری هنر مدرن در اروپا مصادف بود؛ جایی که هنرمندان از آن جمله در آلمان و مدرسه باهاوس، شیفته یافته‌های تحسین برانگیز پایه گذاران این مکتب، ماکس ورتایمر، کورت کوفکا و ولفگانگ کهلر در زمینه تجربیات ادراک بصری شده بودند.',
          price: 20000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 38,
          name: 'طراحی زیورآلات با نرم‌افزار MATRIX',
          image_url:
            'https://www.gisoom.com/book/11460126/front/000/%DA%A9%D8%AA%D8%A7%D8%A8-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D8%B2%DB%8C%D9%88%D8%B1%D8%A2%D9%84%D8%A7%D8%AA-%D8%A8%D8%A7-%D9%86%D8%B1%D9%85-%D8%A7%D9%81%D8%B2%D8%A7%D8%B1-Matrix.jpg?size=290x&t=',
          description:
            '«طراحی زیورآلات با نرم‌افزار MATRIX» یکی از کتاب‌های انتشارات دیباگران تهران و نوشته «فاطمه شکری فومشی» است. انتشارات دیباگران تهران، ناشر مجتمع فنی تهران با همکاری اساتید و متخصصان مجرب و زبر دست و برخورداری از سرمایه‌های انسانی کارآزموده، کانونی بوجود آورده که ماحصل آن تالیف و ترجمه هزاران عنوان از کتاب‌هایی است که می‌تواند نیازهای مختلف علمی کشور از سطح کودک و نوجوان تا دانش‌آموزان، دانشجویان و دیگر مشتاقان جویای علم و دانش را در رشته‌های کامپیوتر و انفورماتیک، کتاب‌‌های آموزشی دوره‌های Windows Server، گرافیک، مالتی مدیا، مدلسازی و سه بعدی، مهارت‌های شغلی، فنی مهندسی و نرم‌افزارهای کاربردی، حسابداری، مدیریت و زبان و کتاب‌های کنکوری مقاطع مختلف رشته‌های مهندسی، فنی و پزشکی مرتفع سازد و چتر حمایت خود را در جهت شکوفایی استعدادها گسترده است.',
          price: 44000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 39,
          name: 'بیانیه‌ی مکتب رمانتیک',
          image_url: 'https://www.behanbook.ir/media/uploads/catalog/default/product_18372_1589370820_17246.jpg',
          description:
            'بیانیهٔ مکتب رمانتیک نوشته آین رند بیانیه جنبش هنری رمانتیک از زبان نویسنده کتاب است. درواقع نویسنده نظرات شخصی خود درباره رمانتیسم در هنر و ادبیات را در این کتاب آورده است.',
          price: 90250,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 40,
          name: 'آماده‌سازی استوری بود',
          image_url: 'https://img.taaghche.com/frontCover/62905.jpg',
          description:
            'نانسی بیمن در کتاب آماده‌سازی استوری‌برد، مراحل پیش‌تولید ساخت انیمیشن را مود بررسی قرار می‌دهد. او اعتقاد دارد این مرحله با وجود جایگاه بسیار ارزشمندی که در موفقیت انیمیشن‌ها دارد مورد غفلت قرار گرفته است. او می‌گوید: اندیشه، تفکر، زیبایی شناسی و ساختار یک فیلم انیمیشن، همه و همه در این مرحله شکل می‌گیرد. بیمن در بخش نخست کتاب آماده‌سازی استوری‌برد به پرورش محتوای داستان تاکید می‌کند. در بخش دوم از تکنیک می‌گوید. در بخش نهایی نیز به ارائه داستان و نحوه چگونگی اجرای آن می‌پردازد. او اعتقاد دارد فن‌آوری ساخت انیمیشن ممکن است تغییر کند اما اصول طراحی ثابت است. شخصیتی که خوب طراحی شده باشد، هم می‌تواند به یک عروسک تبدیل شود و هم می‌تواند به یک شخصیت انیمیشن کامپیوتری خوب تبدیل شود. یعنی اصولی که در فصل‌های طراحی شخصیت آمده، در همه تکنیک‌ها ثابت هستند.',
          price: 17800,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 41,
          name: 'جعبه مقوایی',
          image_url: 'https://www.iranketab.ir/Images/ProductImages/175fbc77b12845168e877596d3636547.jpg',
          description:
            'جعبه مقوایی مجموعه‌ای است از چند داستان کوتاه از سلسله داستان‌های جنایی «شرلوک هولمز» که اولین بار در سال ۱۸۹۳ منتشر شد. عناوین داستان‌ها بدین قرار است: «مسئله هویت»، «راز دره باسکامب»، «جعبه مقوایی»، «کارمند بورس اوراق بهادار»، «ملاک رایگیت»، و «مرد خمیده پشت».',
          price: 33600,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 42,
          name: 'موازنه',
          image_url: 'https://imgcdn.taaghche.com/frontCover/82545.jpg?w=200',
          description:
            'کتاب موازنه حاصل پرسشی است که «محمدرضا شفیعی‌کدکنی» در ذهن سعید محمدحسنی پدید آورده است؛ «به‌راستی ما، شاعران سپیدنویس امروز، سرباز کدام زبان و تاریخ و فرهنگیم؟ و اگر کل اشکال نوین ادبیات ما تابعی از ترجمهٔ شعر و ادب اروپایی است، فارسی‌بودن و معاصریت در شعر نوین فارسی با چه شواهدی سنجیده می‌شود؟!»',
          price: 140250,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 43,
          name: 'بوی درخت گویاو',
          image_url: 'https://www.iranketab.ir/Images/ProductImages/71793dc7cbd6476f9ff1904fb5d7b0d9.jpg',
          description:
            'کتاب بوی درخت گویاو گفت‌وگوی مفصل و جالب پلینیو مندوزا با گابریل گارسیا مارکز، نویسندهٔ بزرگ آمریکای لاتین است. مندوزا در این کتاب از مارکز پرسش‌هایی دربارهٔ زندگی شخصی او، آثارش، نگاهش به دنیا، حضور آدم‌های مهم زندگی‌اش در داستان‌هایش و... می‌پرسد. مارکز به تمامی این سؤالات با دقت و کامل توضیح می‌دهد و از شرح حتی کوچک‌ترین جزئیاتی هم فروگذار نمی‌کند. سال انتشار این کتاب در فرانسه ۱۹۸۲ است، یعنی همان سالی که مارکز جایزهٔ نوبل را گرفت. پس گفته‌های مارکز متعلق به آن زمان است و اگر از ورای حرف‌هایش چیزهایی را ما می‌دانیم که او نمی‌گوید، طبعاً برای این است که چندین سال از آن مصاحبه گذشته است.',
          price: 7600,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 44,
          name: 'گزیده رباعیات بیدل',
          image_url: 'https://idebook.ir/images/books/1/9786007746387.jpg',
          description:
            'رباعی‌های این دفتر به ترتیب الفبا و بر اساس همۀ حروف قافیه و ردیف مرتب شده است تا یافتنشان سهل باشد. افزون بر آن، فهرستی از مطلع رباعی‌ها هم در انتهای کتاب درج شده است. بسیاری از رباعی‌ها با شرح و توضیحاتی همراه شده است.',
          price: 40800,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 45,
          name: 'خاطرات صددرصد واقعی یک سرخپوست پاره وقت',
          image_url: 'https://img.ketabrah.ir/img/l/7115830318286920.jpg',
          description:
            'کتاب خاطرات صد‌در‌صد واقعی یک سرخپوست پاره‌وقت داستان زندگی آرنولد اسپیریت جونیور از زبان خود اوست. آرنولد سرخ‌پوستی است که به‌دلیل مشکلی که در هنگام تولد برایش پیش آمد، سرش با بقیهٔ بدنش تناسب ندارد. علاوه‌بر‌ این ایراد ظاهری چشم‌هایش نیز ضعیف است و به‌جای ۳۲ تا دندان ۴۲ دندان دارد. بی‌نهایت لاغر است و سرش، دستانش و پاهایش متناسب با بدنش نیست و بزرگ است. زبانش می‌گیرد و از همه بدتر، مدام یکی از پاهایش به دیگر گیر می‌کند و زمین می‌خورد.',
          price: 33000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 46,
          name: 'دزیره',
          image_url: 'https://www.iranketab.ir/Images/ProductImages/1b9c66e6f8574fc3872f7e385352f37f.jpg',
          description:
            'کتاب دزیره ماجرای زندگی دزیره کلاری همسر کارل چهاردهم و مادر اسکار اول را از زبان خودش شرح می‌دهد. این رمان اتفاقات نیمهٔ دوم سده هجدهم را روایت می‌کند که در آن دزیره کلاری ملقب به دزیدریا، ملکهٔ سوئد و دختر فرانسیس کلاری تاجر ابریشم و اهل مارسی بود که در ۸ نوامبر ۱۷۷۷ میلادی در فرانسه زاده شد.',
          price: 50000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 47,
          name: 'ستاره ها چیدنی نیستند',
          image_url:
            'https://ketabejamkaran.ir/wp-content/uploads/%D8%B3%D8%AA%D8%A7%D8%B1%D9%87-%D9%87%D8%A7-%DA%86%DB%8C%D8%AF%D9%86%DB%8C-%D9%86%DB%8C%D8%B3%D8%AA%D9%86%D8%AF.jpg',
          description:
            'کتاب ستاره ها چیدنی نیستند در ۱۳ فصل نوشته شده است. این رمان ایرانی که از زندگی یک دختر آمریکایی الهام گرفته شده است، با توصیف وضعیت یک دختر آغاز می‌شود. راوی به ما می‌گوید که دست‌وپای یک دختر به یک صندلی آهنی در کنج یک اتاق طناب‌پیچ شده بود. دختر التماس می‌کرد و می‌خواست که رهایش کنند. مردی که ریش بلند و کله‌قندی داشت و پیراهن سفید یقه‌سه‌سانتی پوشیده و یک انگشتر بزرگ با نگین قرمز توی انگشتش بود، کمربند را بالا می‌بُرد و بی‌هدف به بدن دختر می‌زد. دختر جیغ می‌کشید و می‌گفت و التماس می‌کرد. مرد دوباره شروع کرد به زدن دختر با کمربند و دختر بلندتر جیغ می‌کشید. این دختر کیست؟ آن مرد کیست؟ آن‌ها کجا هستند و این چه وضعیت بغرنجی است؟!',
          price: 37500,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 48,
          name: 'آرزوهای دست‌ساز',
          image_url: 'https://img.taaghche.com/frontCover/69563.jpg',
          description:
            'کتاب آرزوهای دست‌ساز اولین اثر از یک مجموعه تاریخ شفاهی با موضوع پیشرفت است که به ماجرای شکل‌گیری یک شرکت دانش‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌بنیان می‌پردازد. شرکتی دانش‌بنیان در حوزه فناوری‌های الکترونیکی و کامپیوتری که اختراع دوربین ثبت تخلفات رانندگی یکی از معروفترین دستاوردهای آن است. این کتاب با استقبال خوب جوانان و دانشجویان باانگیزه ایرانی روبه رو شده است زیرا داستان چند جوان دانشجو را روایت می کند که برخلاف فضای رخوت‌انگیز و نامطلوب بعضی از دانشگاه‌ها، اهداف و آرزووهای خود را دنبال می‌کنند.',
          price: 83000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 49,
          name: 'روش‌های تربیت یک پسر موفق',
          image_url: 'https://img.taaghche.com/frontCover/68722.jpg?w=400',
          description:
            'کتاب روش‌های تربیت یک پسر موفق نوشته‌ی استیو بیدولف است که انتشارات کتاب‌درمانی آن را منتشر کرده. این کتاب به موضوع تربیت پسران می‌پردازد.',
          price: 16300,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 50,
          name: 'نقش مادر در تربیت کودک',
          image_url: 'https://img.taaghche.com/frontCover/68489.jpg',
          description:
            'کتاب نقش مادر در تربیت کودک نوشته‌ی اسپانسر جانسون و ترجمه‌ی نیاز ظفری است که انتشارات کتاب‌درمانی آن را منتشر کرده. این کتاب به موضوع نقش مادر در تربیت فرزند می‌پردازد.',
          price: 9900,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 51,
          name: 'شیوه‌ی چوپان',
          image_url: 'https://img.ketabrah.ir/img/l/6772684823122633.jpg',
          description:
            'رهبران در عصر حاضر با چالش هایی روزافزون، در حال تغییر و طاقت فرسا مواجه هستند و چیره شدن بر این دشواری‌ها علاوه بر پرورش دادن مجموعه‌ای از مهارت‌ها، نیازمند درونی کردن خصوصیات شخصیتی از قبیل فروتنی، دادن اهمیت حقیقی به کارکنان و یادگیری مداوم است. متأسفانه عدم وجود رهبرانی شریف، کارآمد و خردمند از بزرگترین دلایل شکست سازمان ها در محیط های متفاوت است.',
          price: 19900,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 52,
          name: ' زن کامل',
          image_url: 'https://img.taaghche.com/frontCover/68831.jpg?w=400',
          description:
            'در کتاب زن کامل نوشته مارابل مورگان که با ترجمه لیلا رائفی منتشر شده است. می‌خوانیم چگونه یک زن سیر تکامل در زندگی زناشویی معایبش را حس می‌کند و سعی می‌کند آن‌ها را رفع کند. و با همسرش به کامیابی و تفاهم و خوشی و شادی برسد.',
          price: 17000,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', { id: Array.from({ length: 52 }, (_, i) => i + 1) }, {});
  },
};
