'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          name: 'هری پاتر و فرزند نفرین شده',
          image_url: 'https://newcdn.fidibo.com/images/books/7345_72625_normal.jpg',
          description:
            'جناب آقای حجت گلابی هم از مترجمان کتاب هستند که به دلیل محدودیت در درج تعداد مترجم نام آنها در بالا ذکر نشده است ایستگاه شلوغ و مملو از جمعیت است. آدم‌های بسیاری در ایستگاه هستند که هر کدام می‌خواهند برای خود جایی بروند. در بین این فشار و شلوغی، دو قفس بزرگ بر روی دو چرخ‌دستی سنگین، تلق و تلوق می‌کنند. این چرخ‌دستی‌ها توسط دو پسر به نام‌های جیمز پاتر و آلبوس پاتر کشیده می‌شوند که مادر آنها، جینی، هم به دنبالشان در حال حرکت است. مردی سی و هفت ساله به نام هری، دختر خود، لی‌لی را بر روی شانه‌هایش حمل می‌کند. آلبوس: بابا، همش داره این حرف رو می‌زنه. هری: جیمز، بس می‌کنی؟ جیمز: فقط گفتم شاید بیفته اسلیترین. و شاید... (پدرش به او چشم غره می‌رود) باشه. آلبوس: (به مادرش نگاه می‌کند) برام نامه می‌نویسین دیگه، نه؟ جینی: اگر بخوای هر روز برات نامه می‌فرستیم. آلبوس: نه. هر روز نمی‌خواد. جیمز میگه بیشتر بچه‌ها فقط ماهی یه بار از خونه بهشون نامه می‌فرستن. نمی‌خوام که... هری: سال پیش برای برادرت هفته‌ای سه تا نامه می‌فرستادیم. آلبوس: چی؟ جیمز!',
          price: 10000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'اثر مرکب',
          image_url: 'https://newcdn.fidibo.com/images/books/69249_94233_normal.jpg',
          description:
            'دارن هاردی در کتابش سعی کرده تا خواننده را با این واقعیت که قرار نیست یک‌شبه موفق، پول‌دار، لاغر و... شود. این کتاب درباره‌ی موفقیت است و آنچه برای دستیابی به موفقیت واقعاً لازم است. اگر واقع‌بین باشیم همه‌ی ما می‌دانیم که دستیابی به موفقیت به عوامل مختلفی بستگی دارند و صرفاً دانستن رازها موفقیت ما را به موفقیت نمی‌رساند. ما دائم با ادعاهای مهیج و تبلیغاتی زیادی درباره‌ی پول‌دار شدن، خوش‌اندام شدن، جوان‌تر شدن، جذاب‌تر شدن و... بمباران می‌شویم و معمولاً همه‌ی آن‌ها ادعاهایی یک‌شبه با تلاش کم و پرداخت اندک هزینه‌ای هستند. این پیام‌های تبلیغاتی تکراری، احساس و درک ما را درباره‌ی آنچه که برای رسیدن به موفقیت لازم است، تحریف می‌کنند. ما بینشمان را درباره‌ی اصول ساده اما عمیقی که برای موفقیت لازم و ضروری هستند، از دست داده‌ایم. نویسنده با سال‌ها تجربه و آزمون روش‌های مختلف تلاش کرده است تا در این کتاب شما را از آشفتگی ذهنی درباره‌ی رسیدن به موفقیت خارج کند و اصولی ساده را به شما بیاموزد تا با تمرکز کردن روی همان اصول و به کار بردن آنها در زندگی بتوانید به نتایجی پایدار و قابل سنجش برسید.',
          price: 5000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'سه خواهر',
          image_url: 'https://newcdn.fidibo.com/images/books/7276_68868_normal.jpg',
          description:
            '«سه خواهر» نمایش‌نامه‌ای از آنتوان چخوف با ترجمه پرویز شهدی است. «سه خواهر» درباره پوسیدگی و نابودی اشرافیت اواخر قرن ۱۹ و اوایل قرن بیستم روسیه است. نمایشنامه داستان زندگی و دلمشغولی خانواده‌ای به نام پروزروف است که از سه خواهر به نام‌های اولگا ، ماشا و ایرینا و برادرشان آندره‌ئی تشکیل شده است. همه‎‌ی افراد خانواده بسیار آداب‎دان، فرهیخته و با فرهنگ‌اند. همگی چند زبان می‎‌دانند و از زیبایی چیزی کم ندارند. با این حال همه افسرده‎‌اند و آرزو دارند به مسکو، شهری که یازده سال است از آن دور افتاده‎‌اند برگردند: «اُلگا: پدر عادت‌مان داده بود ساعت هفت صبح از خواب برخیزیم. ایرینا هنوز هم ساعت هفت بیدار می‌شود اما تا ساعت نُه توی رختخواب غلت و واغلت می‌زند و در عالم رؤیا فرو می‌رود... در چنین حالتی قیافه‌ای بسیار جدی هم به خودش می‌گیرد!... [می‌خندد.] ایرینا: برای تو، من همیشه دختربچه‌ای بیش نیستم. تعجب می‌کنی وقتی می‌بینی قیافه‌ای جدی پیدا کرده‌ام. آخر من بیست سالم است!» این اثر جوانانه‌ترین نمایشنامه آنتوان چخوف است. او در این نمایشنامه تلاش می‎‌کند آرمان‎‌های نسل جوان و فرهیخته روسیه را نشان دهد. آرمان‌هایی که انگار هیچ راهی برای به انجام رسیدن ندارند و تنها حسرت گذشته خوبشان را می‎‌خورند.',
          price: 15000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'اسکندر کبیر',
          image_url: 'https://newcdn.fidibo.com/images/books/1438_42693_normal.jpg',
          description:
            'ن‍وی‍س‍ن‍ده‌ ت‍اری‍خ‌ اس‍ک‍ن‍در را ب‍ه‌ س‍ه‌ زب‍ان‌ ف‍ران‍س‍ه‌ و ان‍گ‍ل‍ی‍س‍ی‌ و ع‍رب‍ی‌ خ‍وان‍ده‌ و در ن‍ه‍ای‍ت‌ خ‍لاص‍ه‌ و م‍ه‍م‍ات‌ م‍طال‍ب‌ ت‍اری‍خ‌ م‍ن‍ص‍ور م‍ق‍دون‍ی‌ را ت‍رج‍م‍ه‌ و ج‍م‍ع‌ ن‍م‍ود و ت‍ح‍ق‍ی‍ق‍ات‍ی‌ را ن‍ی‍ز ب‍ه‌ آن‌ اف‍زوده تا کتابی ارزنده تالیف کرده باشد درانتهای کتاب مترجم مطالب و اشعاری که در ادبیات ایران درباره اسکندرمقدونی آمده به انضمام مطالبی در باب عجایب هقتگانه به کتاب افزوده است در منابع مؤلف اصلی کتاب را جیمز کمل نام برده‌اند لیکن در کتاب نامی از این شخص نیامده است از تاریخ اسکندر جیمز کمل ترجمه‌ی رضا قلی بن مهدیقلی شقاقی سرابی نیز موجود است .',
          price: 120000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'هفت اورنگ جامی',
          image_url: 'https://newcdn.fidibo.com/images/books/2120_99221_normal.jpg',
          description:
            'هفت اورنگ یکی از آثار عبدالرحمن جامی است که در قرن نهم هجری قمری سروده شده است. کتاب  هفت بخش دارد و قالب تمام اشعار آن مثنوی است. این  اثر سرشار از داستان‌های تمثیلی و آموزنده است. برخی بر این باورند که منظومه هفت اورنگ به دستور «سلطان حسین بایقرا» سروده شده است، اما این موضوع تایید نشده است.',
          price: 16000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'بذرهای نابودی',
          image_url: 'https://newcdn.fidibo.com/images/books/89279_50632_normal.jpg',
          description:
            'ین کتاب مربوط به پروژه‌ای است که عده اندکی از نخبگان اجتماعی‌ـ سیاسی عهده‌دار انجام دادن آن شده‌اند، نخبگانی که پس از جنگ جهانی دوم نه در لندن که در واشینگتن تمرکز یافته‌اند. این کتاب داستان ناگفته شیوه‌ای است که این نخبگان خودخوانده به اجرا گذاشتند تا به قول کنان «این عدم‌توازن را حفظ کنند». این کتاب داستانِ آن است که چطور گروه بسیار کوچکی در جهان پس از جنگ بر منابع و اهرم‌های قدرت تسلط یافته‌اند. فراتر از همه، این کتاب تاریخ تحول قدرتی است که در کنترل اقلیت منتخبی قرار دارد و طی این تحول حتی علم نیز در خدمت آن اقلیت قرار گرفته است.',
          price: 27000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'اخگر پردیس',
          image_url: 'https://newcdn.fidibo.com/images/books/1100_15766_normal.jpg',
          description:
            'این‌ کتاب‌ از سه‌ گانه‌ اسکندر است‌ و سرگذشت‌ اسکندر جوان‌ را از کودکی‌ تا بیست‌ سالگی‌ یعنی‌ زمانی‌ که‌ بر جای‌ پدر مقتولش‌ شاه‌ فیلیپ‌ نشست‌، روایت‌ می‌کند. سال‌هایی‌ که‌ اسکندر بین‌ ستایش‌ پدرش‌، بیزاری‌ از او و عشق‌ به‌ او درمانده‌ بود. اسکندر از عشق‌ حسادت‌آمیز و نابودکننده‌ مادرش‌ المپیاس‌ حذر می‌کند. به‌ روزهای‌ دور می‌اندیشد و اسبش‌ بوکفال‌ را تربیت‌ می‌کند. به‌ کسوت‌ شاگردی‌ ارسطو درمی‌آید کتاب‌ اخگر پردیس‌ در 622 صفحه‌ به‌ بازار کتاب‌ عرضه‌ شده‌ است‌...',
          price: 30000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'اعتراف‌های یک تبلیغاتچی',
          image_url: 'https://newcdn.fidibo.com/images/books/2296_73387_normal.jpg',
          description:
            'کتاب «اعتراف‌های یک تبلیغاتچی» Confessions of an Advertising Man نوشته‌ی «دیوید اگیلوی» در سال 1963 منتشر شد. این اثر یکی از خواندنی‌ترین آثار حوزه‌ی تبلیغات است که مملو از نکات آموزشی و خلاقانه است. تبلیغات بخشی جدایی‌ناپذیر از هر تجارت و کسب‌وکار است و افراد به دلایل مختلف ازجمله افزایش فروش، ارائه محصول جدید و ... از انواع تبلیغات استفاده می‌کنند. «دیوید اوگیلوی» David Mackenzie Ogilvy یکی از چهره‌های پیشگام در تبلیغات مدرن در این اثر درباره‌ی انواع تبلیغات و تأثیرگذاری هر یک از آن‌ها بر بازار هدف صحبت می‌کند.',
          price: 30000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'قلب عشق',
          image_url: 'https://newcdn.fidibo.com/images/books/2282_10603_normal.jpg',
          description:
            'کتاب «قلب عشق» The Heart of Love نوشته‌ی جان اف. دیمارتینی در دسامبر سال 2006 منتشر شد. این کتاب درباره‌ی نغمه‌ی عشق و تأثیر شگرف آن بر زندگی صحبت می‌کند. عشق در سطحی‌ترین تعریفش دوست داشتن فرد دیگری است که می‌تواند عملکرد ذهن را تحت تأثیر قرار دهد. روح همه‌ی انسان‌ها عشق را درک می‌کند و از کودکی طعم آن را به‌واسطه‌ی عشق خالص مادر چشیده است. احساس خوشایند عشق مانند یک نسیم ملایم است که صورت انسان را نوازش می‌کند. عشق به دنبال خود مهر و محبت می‌آورد و زندگی را لذت‌بخش‌تر از قبل می‌کند. عشق همانند محرکه‌ای قوی و نیرومند است که می‌تواند هر ناممکنی را ممکن سازد.',
          price: 34000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'بیان اندیشه در موسیقی',
          image_url: 'https://newcdn.fidibo.com/images/books/1954_84717_normal.jpg',
          description:
            '«بیان اندیشه در موسیقی» کتابی جمع و جور درباره‌ی تاریخ موسیقی در اروپا و آمریکاست. «سیدنی فینکلشتاین» با نوشتن این کتاب، ضمن بررسی دقیق تحولات موسیقی، توانسته یک دایره‌المعارف جامع و کوچک درباره‌ی موسیقی و فراز و نشیب‌های آن ایجاد کند.',
          price: 25000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'اسلام، سنت، دولت مدرن',
          image_url: 'https://newcdn.fidibo.com/images/books/1360_30421_normal.jpg',
          description:
            'بر اهل نظر پوشیده نیست که زندگی سیاسی نیازمند اندیشهٔ سیاسی است و زندگی سیاسی در دوران جدید، نیازمند اندیشهٔ سیاسی جدید است. عصری که ما در آن زندگی می‌کنیم عصر جهانی شدن دولت ـ ملت است و ما به‌ناچار وارد گردونهٔ زندگی سیاسی در این دوران شده‌ایم که انزوا و کناره‌گیری از آن، جز به بهای گزاف خارج شدن از عرصهٔ فرهنگ و تمدن جدید ممکن نیست. بنابراین، ما بر سر دوراهی تقلید یا تأسیس قرار گرفته‌ایم. تقلید به دلیل تفاوت در شرایط و مقتضیات گرهی از کار فروبسته نمی‌گشاید. تأسیس نیز تنها از مسیر تأمل و بازاندیشی در وضعیت کنونی فکر و اندیشهٔ سیاسی و دشواره‌های آن امکان‌پذیر خواهد بود؛ هدفی که این نوشتار کوششی در راه دستیابی به آن است.',
          price: 33000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'مزرعه‌ی کوزه‌گر',
          image_url: 'https://newcdn.fidibo.com/images/books/84288_18701_normal.jpg',
          description:
            'وقتی کاتارلّا استغاثه‌هایش را به درگاه بازرس تکرار می‌کرد، حتماً خبر شومی در راه بود. «چی شده؟» «وای! وای، رئیس! همین الان فرماندار زنگ زد. انقدر عصبانی بود که مثل بوفالو دود از سوراخ‌های دماغش می‌زد بیرون!» «صبر کن ببینم، کات! کی به تو گفته وقتی بوفالوها عصبانی می‌شن، دود از دماغ‌شون می‌زنه بیرون؟!» «همه می‌دونن، رئیس! خودم هم تو فیلم‌ها و کارتون‌ها دیده‌ام!» «خیلی خب، خیلی خب! چی می‌خواست؟» «گفت باید برید دفترش، دفتر فرماندار، فوری همین حالا رئیس. اگر بدونید چه‌قدر عصبانی بود!» در راه مونته‌لوسا مدام در این فکر بود چرا بونتّی ـ آلدریگی از دستش عصبانی است. این اواخر اوضاع به‌قدری آرام بود که اداره‌ی پلیس شبیه شهر ارواح شده بود؛ فقط چند مورد دزدی مسلحانه، چند مورد آدم‌ربایی، چند تا تیراندازی و چند تا هم سرقت ماشین و دله‌دزدی از دخل مغازه‌ها. تنها اتفاق قابل‌توجه اخیر پیدا شدن جسد توی کیسه بود و برای عصبانی بودن در آن خصوص هم هنوز خیلی زود بود. همین بازرس را بیش‌تر کنجکاو کرده بود تا نگران.',
          price: 36000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'بانوی بی بدن',
          image_url: 'https://newcdn.fidibo.com/images/books/1435_21783_normal.jpg',
          description:
            '«مغز باورنکردنی‌ترین چیز در دنیاست» این جمله پیچیده از الیور سکس، محقق و پژوهشگر عصب نشان از مواجه ما با دنیای بیکران و خارق‌العاده‌ی مغز است. مغز به عنوان حساس‌ترین و پررمزورازترین اندام‌ بدن انسان، محل بحث و تحقیق بسیاری از پزشکان و دانشمندان است که معمولا مقالات و کتاب‌های حاصل از تلاش‌ آنان برای ادبیات‌دوستان، چندان خواندنی و پرکشش نیست، اما الیور سکس باتجربه‌ی زندگی بیماران عصبی کتاب بانوی بی‌بدن را منتشر کرده. کتابی خواندنی که در آن روش‌های درمانی خودش و برخورد بیمارانش با شرایط جدیدشان را برای مخاطبان عام بازگو می‌کند و خواننده را با بیانی قابل درک با عملکرد مغزو بیماری‌های آن روبه‌رو می‌کند.',
          price: 35000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'کتاب آن جا، پایین پله ها',
          image_url: 'https://newcdn.fidibo.com/images/books/1425_96218_normal.jpg',
          description:
            'دارم یک نوک قاشق خامه را از وسط کاسه‌ی بُرش برمی‌دارم که دست علی‌آقا از پشت سر، با پیشدستی نان و سبزی، همراه پنیر و گردو پیش می‌آید. «تنهایی...؟» هربار همین را پرسیده است و من هم هربار گفته‌ام: «نه!» می‌پرسد: «سالاد... زیتون؟» «فعلاً نه...» می‌بیند و به روی خودش نمی‌آورد که هربار و آخرین‌بار برای پانصد و هفدهمین بار گفته‌ام به بُرش من خامه اضافه نکن. «حواست کجاست مرد؟! هزاربار گفته‌ام که...» ریز می‌خندد و با چهار انگشت به هم چسبیده‌ی دست راستش، به پیشانی‌اش سیلی می‌زند. «ببخش... بده عوضش کنم.» «خیر... لازم نکرده.» فکر می‌کنم تا به حال ریزخنده‌اش را تنها من دیده و شنیده‌ام. چهره‌ی خشک و جدی‌اش به ندرت به لبخندی میدان می‌دهد. می‌گویم: «تا نیامده...» داستان های کوتاه این مجموعه‌ که در فضای رئال و گاه سورئال رخ می دهد، مخاطب را از دریچه‌ای تازه با موضوع‌های اجتماعی همراه خود می‌کند.',
          price: 47000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'کهکشان نیستی',
          image_url: 'https://newcdn.fidibo.com/images/books/110581_80746_normal.jpg',
          description:
            'کتاب کهشکشان نیستی به قلم محمد هادی اصفهانی برای اولین با ر در سال 1399 منتشر شد. این کتاب بر اساس زندگی آیت الله سید علی قاضی طباطبائی  نوشته شده و روایتی است که زندگی او را به زیبایی تشریح می‌کند. نویسنده داستان را از جوانی مرحوم قاضی و در سن 27 سالگی او آغاز کرده است. همه چیز از سفر آیت الله قاضی به سفر نجف شروع می‌شود و تا پایان عمر پربرکت او را در بر می‌گیرد.',
          price: 23000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'در محضر ارباب معرفت',
          image_url: 'https://newcdn.fidibo.com/images/books/142190_56739_normal.jpg',
          description:
            'این کتاب حاصل سال‌ها انس و هم‌نشینی استاد رخشاد با مرحوم آیت‌الله سعادت‌پرور(ره) است؛ که البته در لابلای آن از بیانات و احوالات مرحوم علامه طباطبایی(ره) نیز سخن به میان آمده است. کتاب شامل ۲۵۰ جلسه است که مؤلف ارجمند از جلسات مرحوم استاد سعادت‌پرور(ره) نقل نموده‌اند. هر جلسه شامل شرح آیات، احادیث حضرات معصومین(ع) و اشعار است و با رویکرد سلوکی و بیانی لطیف ایراد شده که با ذوق و قریحه مؤلف محترم مزین به اشعار عرفای بزرگی همچون حافظ، فیض کاشانی، شمس مغربی و طوطی همدانی و... نیز گشته است. این جلسات در ۸ فصل تنظیم گردیده.',
          price: 25000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'کتاب لبخند‌ بی‌لهجه',
          image_url: 'https://newcdn.fidibo.com/images/books/70136_87673_normal.jpg',
          description:
            'لبخند بی لهجه که عنوان اصلی آن «laghing without an accent» است و سال 2008 در آمریکا منتشر شد. راوی داستان خود فیروزه است و داستان زندگی‌اش از آبادان تا تهران و آمریکا را در این کتاب روایت کرده است. فیروزه جزایری در لبخند بی لهجه با لحنی ساده و بی‌تکلف از خانواده، فامیل، اخلاقیات پدر و مادرش و برخورد تمام این مسائل با فرهنگ‌های دیگر حرف می‌زند و شیوه‌ی روایتش کتابش را اندکی به طنز نزدیک کرده است.  ',
          price: 48000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'دست پنهان',
          image_url: 'https://newcdn.fidibo.com/images/books/1073_63137_normal.jpg',
          description:
            'کتاب دست پنهان اولین بار سال ۱۹۴۲ با عنوان «the moving finger» در امریکا و انگلستان منتشر شد. مترجم کتاب دست پنهان درباره‌ی ترجمه‌ی عنوان کتاب توضیحاتی آورده است. این اصطلاح در انگلیسی به مفهومی تحت عنوان «قلم سرنوشت» اشاره دارد. مجتبی عبدالله‌نژاد با توجه به مفهوم عنوان کتاب آن را به «دست پنهان» برگردانده است.',
          price: 23000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'کتاب چرا ملت‌ها شکست می‌خورند؟',
          image_url: 'https://newcdn.fidibo.com/images/books/63289_46931_normal.jpg',
          description:
            'کتاب چرا ملت‌ها شکست می‌خورند با عنوان اصلی «why nations fall: the origins of power, properity and poverty» سال 2012 منتشر شده است. این کتاب ریشه‌های فقر و قدرت در ملت‌ها را بررسی کرده و به اقتصاد از دریچه‌ی سیاست نگاه کرده است. کشورهای در حال توسعه مطلب مهم دیگری است که این کتاب روی آن تمرکز کرده است.',
          price: 27000,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'قصه‌های ناتمام',
          image_url: 'https://newcdn.fidibo.com/images/books/2301_24992_normal.jpg',
          description:
            '«قصه هاي ناتمام نومه نور و سرزمين ميانه» مجموعه ای از داستان هایی است که جان رونالد روئل تالکین در طول حیاتش فرصت تکمیل کردن آنها را پیدا نکرد. این کتاب پس از مرگ وی و در سال ۱۹۸۰ توسط پسرش کریستوفر تالکین منتشر شد. افسانه های ناتمام نومه نور و سرزمین میانه همانطور که از اسمش پیداست مجموعه داستان های موازی با داستان های دیگر تالکین هست که در ديگر كتابهاي وي آمده است. عمر تالکین فرصت نداد تا سرانجام این داستان ها رو مشخص کند و به همين خاطر به «افسانه های ناتمام» شهرت یافت. داستان‌ها و افسانه‌های این کتاب هیچ گاه توسط تالکین تکمیل نشده‌اند، اما یادداشت‌هایی از تالکین در این کتاب ضمیمه شده است که طی آن به شرح این نکته پرداخته که قصد دارد هریک از این افسانه‌ها را چگونه به پایان برساند و خواننده با پی‌گیری این یادداشت‌ها می‌تواند پایان افسانه‌ها را در تخیل خود دنبال کند.',
          price: 29000,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('books', null, {});
  },
};
