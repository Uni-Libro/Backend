'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // await queryInterface.bulkInsert(
    //   'author',
    //   [
    //     {
    //       name: 'جی. کی. رولینگ',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/330px-J._K._Rowling_2010.jpg',
    //       description:
    //         'جوآن رولینگ (انگلیسی: Joanne Rowling؛ زاده ۳۱ ژوئیه ۱۹۶۵) متخلص به جی. کی. رولینگ (J. K. Rowling)، مؤلف، تهیه‌کنندهٔ فیلم و فیلم‌نامه‌نویس بریتانیایی است. عمدهٔ شهرتش را برای نوشتن مجموعهٔ فانتزی هری پاتر کسب کرده است که بیش از ۵۰۰ میلیون نسخه فروش داشته است و به یکی از پرفروش‌ترین مجموعهٔ کتاب‌های تاریخ تبدیل شده‌اند. از این کتاب فیلم مجموعه فیلم های هری پاتر از شرکت برادران وارنر نیز ساخته شده است.[۱][۲][۳] یک مجموعه‌فیلم محبوب بر پایهٔ این کتاب‌ها ساخته شد و رولینگ هم از تهیه‌کنندگان قسمت‌های پایانی این مجموعه بود.[۴] او با نام مستعار رابرت گالبریث چند داستان جنایی نوشته‌است.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'دارن هاردی',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Darren_Hardy.jpg/330px-Darren_Hardy.jpg',
    //       description:
    //         'دارن هاردی (Darren Hardy) نویسنده آمریکایی و سخنران انگیزشی ، مشاور و ناشر سابق مجله موفقیت است.[۱][۲] هاردی نویسنده نسخه‌های پر فروش نیویورک تایمز است.[۳]دارن هاردی امروز باید 51 ساله باشد. زیرا او در سال 1971 در سن دیگو کالیفرنیا به دنیا آمد. او سردبیر و موسس مجله معروف موفق و البته چندین شبکه تلویزیونی بود. جالب اینجاست که او اولین کسب و کار خود را در سن 18 سالگی شروع کرد.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'آنتون چخوف',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VanMeetin-AntonChekhov.jpg/330px-VanMeetin-AntonChekhov.jpg',
    //       description:
    //         'آنتون پاولُویچ چِخوف (به روسی: Анто́н Па́влович Че́хов)‏ (زادهٔ ۲۹ ژانویهٔ ۱۸۶۰ در تاگانروگ – درگذشتهٔ ۱۵ ژوئیهٔ ۱۹۰۴) پزشک، داستان‌نویس، طنزنویس و نمایش‌نامه‌نویس برجستهٔ روس است.[۱] هرچند چخوف زندگی کوتاهی داشت و همین زندگی کوتاه همراه با بیماری بود اما بیش از ۷۰۰ اثر ادبی آفرید.[۲] او را مهم‌ترین داستان کوتاه‌نویس برمی‌شمارند و در زمینهٔ نمایش‌نامه‌نویسی نیز آثار برجسته‌ای از خود به‌جا گذاشته‌است. چخوف در ۴۴ سالگی بر اثر خون‌ریزی مغزی درگذشت.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'موریس دروان',
    //       image_url:
    //         'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Maurice_Druon_2003_Orenburg_crop.jpg/330px-Maurice_Druon_2003_Orenburg_crop.jpg',
    //       description:
    //         'موریس دوریون (به فرانسوی: Maurice Druon)؛ (زاده ۲۳ آوریل ۱۹۱۸ - درگذشته ۱۴ آوریل ۲۰۰۹) نویسنده و سیاست‌مدار قرن بیستم میلادی اهل فرانسه است. وی عضو آکادمی فرانسه بود و به عنوان دبیر دائمی این آکادمی بین سال‌های ۱۹۸۵ و ۱۹۹۹ خدمت کرد.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'جامی',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Jami_Rose_Garden.jpg/330px-Jami_Rose_Garden.jpg',
    //       description:
    //         'ورالدّین عبد الرّحمن بن احمد بن محمد جامی (۲۴ آبان ۷۹۳ تربت جام – ۲۷ آبان ۸۷۱ هرات)، معروف به جامی و ملقب به خاتم الشعرا، همه‌چیزدان، شاعر، موسیقی‌دان، ادیب و صوفیِ نام‌دار فارسی‌زبانِ ایرانیِ سدهٔ ۹ قمری است. وی با الهام گرفتن از گلستان سعدی یکی از مهم‌ترین کتاب‌های خود یعنی بهارستان را به رشتهٔ تحریر در آورد.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'اف. ويليام انگدال',
    //       image_url:
    //         'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/William_Engdahl_on_RT_America.jpg/330px-William_Engdahl_on_RT_America.jpg',
    //       description:
    //         'فردریک ویلیام انگدال زاده 9 اوت 1944، نویسنده آمریکایی و نظریه پرداز توطئه مستقر در آلمان است. او خود را به عنوان "پژوهشگر اقتصادی ، مورخ و روزنامه نگار آزاد" معرفی می کند. او متولد مینیاپولیس و در تگزاس بزرگ شده است. او دارای مدرک مهندسی و فقه از دانشگاه پرینستون در سال 1966 (لیسانس) و تحصیلات تکمیلی در اقتصاد تطبیقی از دانشگاه استکهلم در سال 1969 تا 1970 می باشد. وی سپس به عنوان اقتصاددان و روزنامه نگار آزاد در نیویورک و اروپا کار کرد.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'ماری رنولت',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/fa/e/ee/Mary_Renault.jpg',
    //       description:
    //         'ماری رنولت (به انگلیسی: Mary Renault؛ ۴ سپتامبر ۱۹۰۵ – ۱۳ دسامبر ۱۹۸۳) با نام اصلی آیلین ماری چالانس نویسنده‌ای بریتانیایی بود که بیشتر به خاطر رمان‌های تاریخی‌اش دربارهٔ یونان باستان مشهور است. افزون بر تصویرپردازی‌های داستانی‌اش از تسئوس، سقراط، افلاطون، و اسکندر کبیر، او یک زندگی‌نامهٔ تاریخی غیر داستانی دربارهٔ اسکندر نیز نوشت.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'دیوید آگیلوی',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/David_ogilvy.jpg',
    //       description:
    //         'دیوید مکنزی اگیلوی (به انگلیسی: David Mackenzie Ogilvy) در ۲۳ ژوئن ۱۹۱۱ در بریتانیا متولد شد و در ۲۱ ژوئیه ۱۹۹۹ درگذشت. او در کنار بزرگانی مانند دکتر گالوپ (بنیانگذار موسسه گالوپ)، ریموند رابیکم و استنلی رزور از پیشگامان تبلیغات مدرن به شمار می‌رود. او در ابتدا برای موسسه گالوپ کار می‌کرده و در ادامه تصمیم می‌گیرد، شرکت تبلیغاتی خود را بنیانگذاری کند[۱].',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'جان اف. دمارتینی',
    //       image_url: 'https://www.ketabchin.com/r.php?src=assets/uploads/authors_gallery/john-f.demartini.jpg&q=90',
    //       description:
    //         'دکتر جان اف. دمارتینی (متولد 25 نوامبر 1954 ، هوستون ، تگزاس ، ایالات متحده) سخنران، نویسنده و مشاور حرفه ای حرفه ای است که مشتریانش از سرمایه گذاران وال استریت، برنامه ریزان مالی و مدیران شرکت ها تا متخصصان مراقبت های بهداشتی، بازیگران و شخصیت های ورزشی می باشند.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'سیدنی فینکلشتاین',
    //       image_url: 'https://www.culturematters.org.uk/media/k2/items/cache/3fa5dd63975726f36e45afc640b9eee3_XL.jpg',
    //       description:
    //         'سیدنی فینکلشتاین (1909-1974) نویسنده موسیقی بود که در موسیقی جاز تخصص داشت و بیشتر به خاطر کتاب های جاز، موسیقی مردم (1948) و موسیقی چگونه ایده ها را بیان می کند (1952) شناخته شد.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'سید علی میرموسوی',
    //       image_url: 'https://www.mofidu.ac.ir/wp-content/uploads/2019/09/IMG_5467-2.jpg',
    //       description:
    //         'دکتر سیدعلی میرموسوی (متولد ۱۳۴۶، اصفهان) دانشیار دپارتمان علوم سیاسی دانشگاه مفید است. ایشان كارشناسی «علوم سیاسی» (۱۳۷۲) و کارشناسی ارشد «روابط بین‌الملل» (۱۳۷۴) و نیز دكتری «علوم‌ سياسی‌» را در دانشگاه‌ تهران (۱۳۸۱) گذرانده‌اند. ایشان همچنین از سال ۱۳۶۲ با ورود به حوزه علمیه، دروس حوزوی را آغاز و به مدت هشت سال در دوره خارج فقه و اصول شرکت کرده‌اند.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'آندرآ کامیلری',
    //       image_url:
    //         'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Andrea_Camilleri_2010_by_Marco_Tambara.jpg/300px-Andrea_Camilleri_2010_by_Marco_Tambara.jpg',
    //       description:
    //         'آندره‌آ کامیلری (انگلیسی: Andrea Camilleri؛ زادهٔ ۶ سپتامبر ۱۹۲۵ - ۱۷ ژوئیه ۲۰۱۹) یک نویسنده، پدیدآور و کارگردان تئاتر اهل ایتالیا است. وی از سال ۱۹۵۰ میلادی تاکنون مشغول فعالیت بوده‌است. او آثار متعددی از ساموئل بکت و لوئیجی پیراندلو را بر روی صحنه برده‌است. همچنین برندهٔ جوایزی همچون نشان شایستگی از جمهوری ایتالیا شده‌است.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'الیور ساکس',
    //       image_url:
    //         'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/9.13.09OliverSacksByLuigiNovi.jpg/300px-9.13.09OliverSacksByLuigiNovi.jpg',
    //       description:
    //         'الیور ساکس (به انگلیسی: Oliver Sacks) (زاده ۹ ژوئیهٔ ۱۹۳۳ - درگذشته ۳۰ اوت ۲۰۱۵ میلادی) پزشک، عصب‌شناس و نویسنده بریتانیایی بود. وی استاد عصب‌شناسی دانشکده پزشکی دانشگاه نیویورک بود. در سال‌های ۲۰۰۷ تا ۲۰۱۲ ساکس در دانشگاه کلمبیا در زمینه عصب‌شناسی و روان‌پزشکی تدریس کرد. یکی از مشهورترین آثار الیور ساکس، کتاب مردی که همسرش را با کلاهش اشتباه می‌گرفت بود که در سال ۱۹۸۵ منتشر شد.[۳]',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'رضا خاکی نژاد',
    //       image_url: 'https://cdn.isna.ir/d/2020/03/30/3/61605007.jpg',
    //       description:
    //         'ضا خاكي نژاد متولد سال 1328 ، نویسنده ی ایرانی می باشد. او را پيش از اين به عنوان روزنامه نگار مي شناختند ولی اکنون در زمينه داستان نويسي فعال است و کارهایش تاثيرگذار بوده و اهل قلم آنها را ستوده اند.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'محمد هادی اصفهانی',
    //       image_url:
    //         'https://cdn.nody.ir/files/2021/06/22/nody-%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%DA%A9%D8%AA%D8%A7%D8%A8-%DA%A9%D9%87%DA%A9%D8%B4%D8%A7%D9%86-%D9%86%DB%8C%D8%B3%D8%AA%DB%8C-1624357176.jpg',
    //       description: 'عالم مجاهد',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'محمد حسین رخشاد',
    //       image_url: 'http://h-emambagher.com/wp-content/uploads/2021/12/photo_2021-12-11_13-13-22.jpg',
    //       description: 'از فقهای برجسته',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: '(فیروزه دوما(جزایری',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Firoozeh_Dumas.JPG/330px-Firoozeh_Dumas.JPG',
    //       description:
    //         'فیروزه جزایری در سال ۱۳۴۴ از پدر و مادری شوشتری در آبادان به دنیا آمد.[۱] او در سن ۷ سالگی، به همراه خانواده از طرف شرکت نفت ایران که پدرش در آن به عنوان مهندس کار می‌کرد، به شهر وایتیر در کالیفرنیا رفت. پس از دو سال زندگی در آمریکا به ایران بازگشت و در اهواز و تهران به‌سر برد. دو سال بعد، دوباره خانوادهٔ وی به آمریکا برگشتند و ابتدا در وایتیر و سپس در نیوپورت‌بیچ ساکن شدند. فیروزه جزایری سپس به تحصیل در دانشگاه برکلی پرداخت و در آنجا با یک مرد فرانسوی ازدواج کرد.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'آگاتا کریستی',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Agatha_Christie.png/300px-Agatha_Christie.png',
    //       description:
    //         'آگاتا کریستی، DBE (به انگلیسی: Dame Agatha Christie, DBE) (زاده ۱۵ سپتامبر ۱۸۹۰ – درگذشته ۱۲ ژانویه ۱۹۷۶) نویسنده مشهور انگلیسی و خالق داستان‌های جنایی و ادبیات کارآگاهی بود. کریستی، نویسنده‌ای است که کتاب‌هایش بیشترین ترجمه را به زبان‌های مختلف دنیا داشته‌است. پس از وی ژول ورن و سپس شکسپیر قرار دارند.[۱] آگاتا کریستی در ۱۲ ژانویه ۱۹۷۶ در ۸۵ سالگی به مرگ طبیعی درگذشت.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'جیمزای. رابینسون',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/James_A._Robinson_in_Ukraine_-_2018_%28MUS3218%29_%28cropped%29.jpg',
    //       description:
    //         'جیمز رابینسون، زاده ی سال 1960، متخصص علوم سیاسی، استاد دانشگاه و اقتصاددان انگلیسی است. او در دانشگاه هایی چون دانشگاه شیکاگو، هاروارد، کالیفرنیا، برکلی، کالیفرنیای جنوبی و ملبورن تدریس کرده است.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'دارون عجم اوغلو',
    //       image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Acemoglu_2016.png',
    //       description:
    //         'دارون عجم اوغلو پژوهشگر ترکیه‌ای است که از پراستنادترین پژوهشگران حوزه‌ی اقتصاد به شمار می‌آید. او افتخارات مختلفی را چون عضویت در فرهنگستان هنر و علوم آمریکا به دست آورده است. از بهترین کتاب‌های دارون عجم اوغلو می‌توان به عناوینی چون «چرا کشورها شکست می‌خورند» و «دالان باریک» اشاره کرد.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //     {
    //       name: 'جی.آر.آر. مارتین',
    //       image_url:
    //         'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg/330px-Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg',
    //       description:
    //         'جرج ریموند ریچارد مارتین[۲] (انگلیسی: George Raymond Richard Martin؛ زادهٔ ۲۰ سپتامبر ۱۹۴۸ با نام جرج ریموند مارتین) رمان‌نویس، فیلم‌نامه‌نویس و نویسندهٔ داستان کوتاه آمریکایی است. او مؤلف مجموعهٔ رمان‌های فانتزی حماسی ترانه یخ و آتش بوده‌است که یک مجموعهٔ تلویزیونی آمریکایی مشهور نیز با نام بازی تاج‌وتخت (۲۰۱۱–۲۰۱۹) از روی این رمان‌ها اقتباس شد. برخی از منتقدان و نشریات بازی تاج‌وتخت را به‌عنوان یکی از بهترین مجموعه‌های شبکهٔ اچ‌بی‌او در تمام دوران انتخاب کرده‌اند.',
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     },
    //   ],
    //   {},
    // );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('author', null, {});
  },
};
