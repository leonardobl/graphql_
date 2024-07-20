import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      id: '602',
      firstName: 'Elisa',
      lastName: 'Pereira',
      userName: 'elisa.pereira',
      indexRef: 17,
      createdAt: '2017-02-15T11:29:40.799Z',
    },
    {
      id: '903',
      firstName: 'Enzo',
      lastName: 'Barros',
      userName: 'enzo_barros',
      indexRef: 18,
      createdAt: '2018-03-28T00:53:08.981Z',
    },
    {
      id: '470',
      firstName: 'Danilo',
      lastName: 'Carvalho',
      userName: 'danilo95',
      indexRef: 9,
      createdAt: '2020-04-23T12:32:02.614Z',
    },
    {
      id: '115',
      firstName: 'Talita',
      lastName: 'Melo',
      userName: 'talita.melo',
      indexRef: 3,
      createdAt: '2017-04-23T19:24:43.992Z',
    },
    {
      id: '812',
      firstName: 'Heloísa',
      lastName: 'Albuquerque',
      userName: 'heloisa.albuquerque',
      indexRef: 19,
      createdAt: '2015-04-23T05:19:20.309Z',
    },
    {
      id: '111',
      firstName: 'Emanuel',
      lastName: 'Carvalho',
      userName: 'emanuel.carvalho',
      indexRef: 13,
      createdAt: '2018-01-11T19:22:49.010Z',
    },
    {
      id: '453',
      firstName: 'Murilo',
      lastName: 'Nogueira',
      userName: 'murilo_nogueira',
      indexRef: 5,
      createdAt: '2020-07-29T03:50:46.143Z',
    },
    {
      id: '90',
      firstName: 'Maria Eduarda',
      lastName: 'Costa',
      userName: 'mariaeduarda_costa12',
      indexRef: 12,
      createdAt: '2017-05-28T18:06:23.258Z',
    },
    {
      id: '958',
      firstName: 'Marcelo',
      lastName: 'Carvalho',
      userName: 'marcelo_carvalho',
      indexRef: 4,
      createdAt: '2019-09-30T19:31:56.383Z',
    },
    {
      id: '592',
      firstName: 'Salvador',
      lastName: 'Moraes',
      userName: 'salvador.moraes',
      indexRef: 16,
      createdAt: '2020-09-28T07:17:47.496Z',
    },
    {
      id: '502',
      firstName: 'Morgana',
      lastName: 'Santos',
      userName: 'morgana_santos',
      indexRef: 15,
      createdAt: '2015-05-04T21:11:19.982Z',
    },
    {
      id: '247',
      firstName: 'Alice',
      lastName: 'Barros',
      userName: 'alice_barros38',
      indexRef: 20,
      createdAt: '2020-06-09T15:15:18.817Z',
    },
    {
      id: '935',
      firstName: 'João Pedro',
      lastName: 'Santos',
      userName: 'joaopedro_santos5',
      indexRef: 7,
      createdAt: '2017-07-28T00:30:32.214Z',
    },
    {
      id: '374',
      firstName: 'Feliciano',
      lastName: 'Moreira',
      userName: 'feliciano.moreira',
      indexRef: 11,
      createdAt: '2016-05-08T12:05:05.853Z',
    },
    {
      id: '30',
      firstName: 'Bernardo',
      lastName: 'Carvalho',
      userName: 'bernardo41',
      indexRef: 10,
      createdAt: '2018-04-04T02:39:50.892Z',
    },
    {
      id: '439',
      firstName: 'Isaac',
      lastName: 'Martins',
      userName: 'isaac55',
      indexRef: 6,
      createdAt: '2020-05-04T08:59:15.292Z',
    },
    {
      id: '352',
      firstName: 'Carla',
      lastName: 'Batista',
      userName: 'carla.batista',
      indexRef: 14,
      createdAt: '2020-01-18T09:23:51.365Z',
    },
    {
      id: '5',
      firstName: 'Hugo',
      lastName: 'Reis',
      userName: 'hugo25',
      indexRef: 2,
      createdAt: '2015-10-18T00:56:33.763Z',
    },
    {
      id: '29',
      firstName: 'Rafaela',
      lastName: 'Saraiva',
      userName: 'rafaela.saraiva91',
      indexRef: 8,
      createdAt: '2019-10-07T20:17:43.678Z',
    },
    {
      id: '771',
      firstName: 'Márcia',
      lastName: 'Carvalho',
      userName: 'marcia_carvalho81',
      indexRef: 1,
      createdAt: '2016-12-08T00:49:39.870Z',
    },
    {
      firstName: 'Joãozinho',
      lastName: 'Miranda',
      userName: 'joao-miranda',
      passwordHash:
        '$2b$12$g7MOqHcxPAZwmq3CRsuyQORiNqMaT.dYNhZApg2Hg0mO9T1d2Hzly',
      indexRef: 21,
      createdAt: '2021-05-16T21:51:22.435Z',
      id: 'AV7ogHd',
    },
    {
      firstName: 'Luiz 1',
      lastName: 'Otávio',
      userName: 'luizotavio',
      passwordHash:
        '$2b$12$TBQwj2/EsvhhpdCsDe0O8OM6nTp0beigiZRvuehH7cKshcntlp1Tu',
      indexRef: 22,
      createdAt: '2021-05-16T21:53:11.849Z',
      id: 'xDZo0bA',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ4RFpvMGJBIiwiaWF0IjoxNjIyMzYxMTQ5LCJleHAiOjE2MjI5NjU5NDl9.U9PdwUzGcCcAIqHdsTYpNvCbosGT1pAafOizS2-7USs',
    },
    {
      firstName: 'Joana',
      lastName: 'o.',
      userName: 'joana',
      passwordHash:
        '$2b$12$C.HAj2qCaTtHQeDsdyvgj.1UtOSoDFG65S0Cma/wEM7cu9IF.XRCS',
      indexRef: 23,
      createdAt: '2021-05-19T10:20:13.062Z',
      id: 'ASPURjd',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJBU1BVUmpkIiwiaWF0IjoxNjIyMzYxMjcyLCJleHAiOjE2MjI5NjYwNzJ9.GKPpjSbWXbi4wddd0Wt27qHitNHUIESusGzblLuQ1X8',
    },
  ];
  const posts = [
    {
      id: '860',
      title: 'Et voluptatem nulla omnis et iusto ullam.',
      body: 'Ad non pariatur. Aut molestias accusamus et inventore sunt voluptates non doloremque illum. Perspiciatis et provident vel et fugiat dolores ut. Quos quibusdam impedit cupiditate quia at eaque quae.',
      userId: '29',
      indexRef: 10,
      createdAt: '2018-08-10T23:41:51.714Z',
    },
    {
      id: '940',
      title:
        'Similique impedit consequatur qui ipsam sint quam rerum dolores distinctio.',
      body: 'Quidem nisi saepe omnis quia repudiandae odio. Eius quia quis inventore. Illo nihil voluptas est. Quo atque facilis autem velit. Aspernatur quia labore eveniet dolorum.\n \rEum aut non modi modi quis delectus. Aspernatur quis earum ipsam sed qui a enim. Blanditiis nobis suscipit.\n \rUt pariatur omnis beatae. Aut veritatis dicta cum ipsam sequi alias aspernatur. Sed perferendis cumque aspernatur.\n \rRepellendus dolores vero eum consequatur magni culpa quisquam. Architecto qui qui dolorem voluptates quam laborum ratione quam velit. Ducimus molestiae aut dicta iure. Ab necessitatibus sunt ratione delectus molestiae a. Minus in aut qui aspernatur adipisci odit deleniti quo.\n \rExplicabo mollitia modi sint quisquam tempora excepturi eveniet minima. Cupiditate veniam tempora et quam quas maiores sed deleniti. Assumenda magnam qui id rerum laborum praesentium. Dolore omnis perferendis reiciendis qui est deserunt architecto.\n \rQuia vel nobis ducimus quis magnam quos vitae. Dicta dolor est modi adipisci laborum eos. Ad eveniet omnis itaque tempora debitis hic qui incidunt. Aliquam error blanditiis deleniti consequuntur distinctio dignissimos labore commodi suscipit.',
      userId: '903',
      indexRef: 12,
      createdAt: '2015-08-28T14:07:58.674Z',
    },
    {
      id: '342',
      title: 'Maiores ex tempore quo qui.',
      body: 'Earum natus quis possimus iusto voluptatem dicta. Facilis voluptate minima architecto similique quas. Tempora illum omnis aut et id minima nihil itaque quo. Dicta ratione ut voluptates quia harum voluptates qui.\n \rVoluptas velit qui eum sit voluptatem animi aut provident enim. Sed magnam reiciendis. Natus et fugit omnis quaerat iusto iste aliquam dignissimos magnam.',
      userId: '115',
      indexRef: 4,
      createdAt: '2016-06-05T20:17:46.223Z',
    },
    {
      id: '783',
      title: 'Autem non temporibus sequi.',
      body: 'Ipsam blanditiis amet. Sapiente sed eos earum qui consequatur natus quia voluptatem nihil. Non eum omnis aut sed autem et recusandae vel. Explicabo et temporibus quod voluptatem. Dolores debitis accusamus dolore aut fuga sunt. Et explicabo voluptates tenetur sed voluptatem repellendus est officia.\n \rPariatur deleniti reiciendis quia. Et molestiae voluptatem sequi eligendi rem est voluptatem incidunt praesentium. Consectetur quo dolor nobis distinctio ratione voluptatem porro saepe. Non et corporis et ipsa natus error quisquam necessitatibus. Nihil eius consequatur minus quia repudiandae aut eos.\n \rIn fugiat qui quis soluta facilis nesciunt possimus provident laudantium. Eius aut quidem repellat. Est dolores est eveniet similique tenetur voluptatem. Optio aut dolores at quia possimus reiciendis voluptatem. Non iure nesciunt ut soluta odio omnis earum. Quia voluptatem nobis.\n \rSint est blanditiis dignissimos dolore omnis expedita aut impedit quia. Temporibus ut dolores laborum unde. Voluptates illum itaque dolorem et et commodi. Et consequatur adipisci consectetur commodi provident. Temporibus itaque sint quia odit. Magni consequatur commodi facere sit.',
      userId: '502',
      indexRef: 22,
      createdAt: '2021-04-01T01:06:47.589Z',
    },
    {
      id: '15',
      title: 'Velit culpa dolorem libero velit sed temporibus omnis.',
      body: 'Laudantium accusamus sit excepturi aut voluptatem. Sed aliquam accusamus et dicta debitis. Quam nihil iusto ullam repudiandae.\n \rAutem aperiam officiis quia eius quis esse. Quos eos at facilis non ut. Molestiae ea dolor. Pariatur totam aliquam totam aut necessitatibus quis dolor.\n \rOfficiis ducimus reprehenderit voluptatem ut non nisi autem. Rerum enim et blanditiis pariatur qui et sit ex et. Qui deleniti cumque id expedita saepe in excepturi incidunt. Facere a tenetur a enim repudiandae accusantium. Accusantium doloribus sed accusantium id soluta impedit atque nisi occaecati.\n \rSuscipit culpa iure quia aut et et ut. Non iste quo officiis ab magnam sit voluptatem. Deserunt ut at ut ad omnis et nihil.\n \rIllo blanditiis enim numquam sed ad magni est ut porro. Eveniet natus eos quam voluptate sint repellat et. Provident et quo ea necessitatibus sed dolor. Amet quae aut.',
      userId: '439',
      indexRef: 23,
      createdAt: '2020-04-22T04:29:45.812Z',
    },
    {
      id: '704',
      title: 'Itaque voluptas et tempora dolor dolor amet dolor ut.',
      body: 'Debitis praesentium facere odit similique in sed necessitatibus. Possimus quidem et. Aliquid labore placeat rerum hic nulla.\n \rNon et ducimus. Ex incidunt qui qui quibusdam laboriosam consequatur accusantium. Ut qui blanditiis est quam rerum provident. Aut et qui ut culpa voluptate. Magni quod culpa aliquam recusandae rem odit iste cupiditate blanditiis.\n \rMolestias alias vel dolores blanditiis. A eveniet eum iste sapiente. Deleniti voluptatibus magni assumenda quo aperiam non voluptatum similique.\n \rExercitationem sed hic unde delectus animi dolore dolor maiores. Dolorum eius laborum tempora necessitatibus nisi praesentium. At delectus pariatur iusto. Eum eos asperiores iste commodi consectetur et temporibus. Quam omnis minima et sunt et sed magni.\n \rSint fuga aut. Est facere consequatur nihil consequatur. Earum est aut. Repellendus tempore magni.',
      userId: '115',
      indexRef: 5,
      createdAt: '2017-10-21T11:29:55.549Z',
    },
    {
      id: '481',
      title: 'Molestias nobis sunt eum totam.',
      body: 'Consequatur natus quae quisquam laudantium est. Aut omnis autem nulla et ipsum sint. Et consectetur fugiat magni et laboriosam. Dolor magni vero magnam dignissimos sed iure qui. Voluptatem maiores aut quasi voluptas. Doloribus illum alias qui dolorum est.\n \rEst nostrum sequi et velit sunt est. Ipsum est atque dolore. Dolores nihil rem. Consequatur fugiat vel non cupiditate ut. Maxime unde aliquid.\n \rImpedit fugit minima voluptatem. Error labore enim rerum aut qui aut soluta eum. Itaque reprehenderit minima veritatis distinctio voluptas dolores. Non accusantium facere non occaecati saepe necessitatibus id est.\n \rDolore rerum vero ut delectus consequatur voluptatibus rerum. Cum sapiente vero quia fugiat. Omnis odit harum aut eaque labore. Et nulla dignissimos animi vitae perferendis quasi voluptatibus eligendi at.\n \rCorporis facilis non cumque ducimus nobis. Quas non accusamus tenetur non vel repudiandae dicta. Voluptatem commodi asperiores nihil et. Asperiores ut fugiat earum voluptate ut quo deserunt. Voluptatem voluptas est eius et.\n \rUt soluta animi alias quia labore in autem blanditiis. Tenetur ut porro et tempore eaque sapiente id libero. Velit fuga dolor sapiente quia in laudantium exercitationem beatae enim.',
      userId: '29',
      indexRef: 7,
      createdAt: '2015-12-11T00:40:59.233Z',
    },
    {
      id: '856',
      title:
        'Repellendus fugiat officiis quisquam asperiores aliquid dignissimos.',
      body: 'Quisquam quas quia rerum blanditiis autem. Odit harum possimus sit dolor voluptatem aliquid facilis corporis. Rerum magnam qui optio voluptates tenetur et totam qui occaecati. Libero et ut. Laborum placeat veritatis sit quod corporis quia ipsam qui. Dolores ut quia tempore rerum beatae.\n \rDicta magnam explicabo sint. Nihil omnis omnis voluptatem enim eaque temporibus mollitia enim aut. Hic quae quo aut. Beatae voluptas sed consectetur in a. Deserunt repellendus nulla.\n \rDolorem sapiente qui quasi veritatis ea fuga accusamus quis voluptatem. Cumque repudiandae tenetur nesciunt quidem et reprehenderit voluptates. Consequatur non placeat maiores. Ipsum hic repellat numquam. Unde magnam voluptate rerum officia quia quia ea. Amet sit harum.\n \rEt quia reiciendis suscipit voluptatem assumenda. Aliquid sed consequatur cumque dolorum. Et itaque rerum et.\n \rEst odio laborum eveniet rem minus magnam cupiditate. Voluptatem amet omnis quos facilis animi dolore. Ut est consequatur cum quis tempora in. Voluptatem eveniet ut velit nisi. Deleniti nemo sit nisi magni quia ut aut quod. Libero dolorem ipsum accusantium perspiciatis.',
      userId: '502',
      indexRef: 18,
      createdAt: '2021-04-23T08:30:50.947Z',
    },
    {
      id: '361',
      title: 'Ad nihil magni atque.',
      body: 'Laudantium qui accusamus deleniti velit nulla eligendi harum maxime nobis. Vitae sint totam et. Ipsa totam est error est dolor nostrum aperiam tenetur unde. Sit labore dolores et dignissimos voluptatem veniam quae.\n \rMolestiae qui quas est ipsa sunt. Tempore cum non ipsum. Est aspernatur voluptas autem repellat consectetur rem quos soluta.\n \rVoluptas quia quia quis ipsam explicabo aliquid similique necessitatibus officia. Voluptatum dicta ut. Aliquam quia odio sunt cumque dolorem doloremque.\n \rVitae ipsum soluta ducimus et. Vitae adipisci in vel et ad ratione aut quidem laboriosam. Dolor velit fuga est consequuntur quibusdam voluptate. Autem soluta in aut earum iusto consectetur unde veniam omnis.\n \rMollitia voluptatem porro omnis. Deserunt debitis ducimus tenetur. Aut molestiae harum. A voluptas labore fugiat tempore odit incidunt.',
      userId: '115',
      indexRef: 3,
      createdAt: '2016-06-07T15:31:52.589Z',
    },
    {
      id: '666',
      title: 'Doloremque sit atque dolor rem non ut voluptates quod maiores.',
      body: 'Facere fugit voluptates dolor enim illo consequatur ipsa cupiditate. Assumenda minima facere ratione. Voluptas laborum ipsa eveniet impedit magnam in. Molestiae consectetur enim. Ullam eius delectus beatae aut. Qui aut et magni nihil et et illo.\n \rMaiores quia dolorum quo quae enim est sit soluta. Delectus nam ducimus. Aut nobis a omnis hic et in blanditiis ratione. Accusamus vel sed.\n \rLaborum libero accusamus et assumenda dolores possimus neque. Libero accusamus eos. Ab tempora a quia non dignissimos. Cumque odit nulla dolorem temporibus aut animi architecto ipsum qui. Eius quis deleniti quam modi voluptates omnis dicta dolores.\n \rNemo et odio delectus suscipit atque possimus blanditiis aperiam. Non cumque quaerat quas error aut quas. Labore est in et sapiente praesentium dicta possimus. Fuga quos minima quo ut.\n \rRepellat qui rerum cumque necessitatibus a voluptas pariatur. Est ipsum necessitatibus. Qui id est doloremque deleniti ut hic ad reiciendis expedita. Qui reprehenderit labore velit dignissimos voluptatem inventore asperiores id aliquam.',
      userId: '502',
      indexRef: 21,
      createdAt: '2020-03-27T17:21:33.103Z',
    },
    {
      id: '572',
      title: 'Nulla sunt sint et et officia voluptatem itaque.',
      body: 'Quam voluptatem at reprehenderit nesciunt qui est aperiam aut voluptas. Deserunt maiores non rerum numquam impedit quibusdam maxime consequatur. Perspiciatis sit cumque tenetur accusantium rem qui.\n \rLabore voluptatem enim reprehenderit cumque neque expedita soluta. Ut labore quam itaque repudiandae rerum recusandae cupiditate harum. Sapiente quas incidunt et modi voluptatem et. Facilis dicta nesciunt ullam ut perspiciatis. Sint et non officia est dolore consequuntur impedit corporis.\n \rDoloremque adipisci saepe qui. Nostrum fugit labore odit cupiditate aliquid iure qui pariatur error. Et eum nostrum nisi reiciendis architecto.\n \rQuidem dolorum veniam pariatur culpa vitae nesciunt dolorem recusandae. Enim et facilis aut accusantium reprehenderit accusamus enim ut. Qui temporibus earum illo qui.\n \rEarum cupiditate unde aut eos sunt consequatur. Illum ipsa explicabo tempora nobis temporibus eum harum quo. Vero quis eos. Quia tempore et voluptates quidem quia veniam.',
      userId: '958',
      indexRef: 15,
      createdAt: '2016-11-19T22:23:52.689Z',
    },
    {
      id: '861',
      title: 'Dolores consequatur eos in ipsa et quasi sequi.',
      body: 'Non est earum omnis. Optio earum ex ut. Id quae voluptatem. Deleniti maxime aut voluptatem quasi placeat aliquid sunt.\n \rMolestiae quia et veniam provident quia. Sed et asperiores sed est non dolore. Porro sed blanditiis voluptatum voluptatum aut unde odit nobis. Dicta animi sit nisi ipsam nesciunt praesentium non cumque.\n \rA culpa consequatur dolores amet temporibus dicta voluptatem ab. Odit accusantium rerum et sapiente accusamus. Sint sit asperiores qui molestiae. Sunt laudantium cumque nobis dolor.\n \rQui omnis ea doloribus qui. Aut non sed. Et ratione sapiente ipsum rerum. Id consequuntur atque corporis facilis ad corrupti. Vel doloremque dolores sapiente ut.\n \rNulla excepturi voluptatem id reiciendis. Ducimus omnis commodi placeat molestiae similique rerum praesentium asperiores ea. Est ut exercitationem atque id eum repudiandae dolorum. Nulla aperiam eius voluptate earum possimus autem eum.',
      userId: '115',
      indexRef: 6,
      createdAt: '2018-10-31T18:06:19.757Z',
    },
    {
      id: '645',
      title: 'Nemo rerum dolorem.',
      body: 'Accusantium quis est molestiae. Aliquam voluptatem rerum eaque. Nihil error nam voluptates aut eum libero. Est quasi hic dolor itaque. Quis officia distinctio et non itaque. Voluptate odio enim.\n \rAutem ut blanditiis incidunt temporibus voluptatem consequatur vero harum itaque. Aut eveniet unde dolores consequatur et. Id sequi deleniti incidunt. Vitae et magni.\n \rConsectetur aperiam error tempora at harum maxime. Repellat et voluptas. Sint nesciunt animi aperiam sed maxime qui mollitia nihil. Aut illo labore voluptatem quia minus.',
      userId: '115',
      indexRef: 1,
      createdAt: '2020-12-19T19:25:24.495Z',
    },
    {
      id: '455',
      title: 'Culpa consequatur dicta dignissimos.',
      body: 'Animi perspiciatis aut quia laborum repellat. Nobis ut qui odit aliquid tenetur. Dolorem porro earum quisquam deleniti debitis fuga vel officiis. Veritatis sed sint. Qui reiciendis at illo dolorem corrupti harum.\n \rNostrum repellendus sunt rerum soluta perspiciatis. Et consequatur fuga sed explicabo. In quas aut quas odio a tenetur in commodi provident. Odit qui molestias ut error placeat ipsam neque. Ea impedit voluptatem laboriosam voluptates pariatur fugiat facilis quo. Nostrum optio qui reprehenderit dolorem omnis accusantium possimus corrupti cumque.\n \rVoluptatem nesciunt dolorem libero. Similique aut et cupiditate omnis sit sint tenetur qui voluptatem. Blanditiis quo ea nihil recusandae et nobis molestiae. Nemo est et. Odio quis unde. Quae debitis qui iusto dolorem dolores nemo.',
      userId: '29',
      indexRef: 9,
      createdAt: '2021-02-22T14:54:03.421Z',
    },
    {
      id: '49',
      title:
        'Qui facere repellat dolor sint quos quam consequatur sed asperiores.',
      body: 'Distinctio atque amet doloribus vero doloremque et est nobis. Vel molestiae quidem ut qui quasi quas officiis ut. Aut amet nihil asperiores repellendus eos. Sint amet odio itaque et. Omnis voluptatibus quia id exercitationem enim aspernatur possimus voluptatum atque. Veritatis odio dolor voluptas.\n \rRepudiandae dolor impedit. Saepe vitae non facere cumque qui sunt harum. Et cupiditate quia. Omnis labore quae quisquam alias occaecati labore dolorem laborum sit.\n \rNesciunt velit provident non similique asperiores. Repellat deserunt atque sed aut non sunt. Porro sed dolores cumque. Ipsum sapiente similique ipsam ex fugiat in. Deserunt vero molestiae commodi fugiat voluptatem pariatur.',
      userId: '247',
      indexRef: 11,
      createdAt: '2019-09-07T06:51:26.519Z',
    },
    {
      id: '607',
      title: 'Laborum optio sunt aut ut ut ut.',
      body: 'Sit sed deserunt libero nulla in culpa. Culpa quasi ullam quaerat dolorem assumenda molestiae. Doloribus autem possimus beatae esse optio consectetur. Ut veritatis sint voluptatem minima occaecati ab id sed optio. Qui laudantium hic iusto voluptatibus quis sed exercitationem ut mollitia.',
      userId: '439',
      indexRef: 24,
      createdAt: '2019-02-12T01:13:25.622Z',
    },
    {
      id: '50',
      title: 'Enim et provident rem.',
      body: 'Explicabo placeat ut quis. Qui et accusantium repellat quaerat ut laboriosam. Sunt ea asperiores. Molestiae fugiat ut. Possimus natus cum in ut.\n \rVelit laborum enim accusamus voluptatem est quae et aut quis. Nesciunt dolores earum aliquid atque eos ipsa harum quidem est. Sint a assumenda sunt velit. Ipsa dicta nemo quia assumenda eos omnis dolorem repellat. Dicta expedita dolorem illum vel. Error facere ut explicabo minima.\n \rDicta quae illo non voluptas nesciunt cupiditate. Sequi dolorem cum. Quis et doloremque harum consequatur quibusdam est expedita. Hic occaecati esse placeat voluptas iure sed qui quidem fugit. Quis ratione dicta asperiores et.\n \rQui quo illum qui ut odit voluptas. Perferendis accusamus nesciunt. Asperiores totam nemo reprehenderit odit soluta odio. Consequatur minus quam et rerum architecto quis quo deserunt. Omnis culpa asperiores nulla ut fugit magnam rerum excepturi.\n \rVoluptas ipsum quia accusantium non blanditiis autem. Voluptate voluptate magni laboriosam porro aspernatur. Eaque iure repellat corrupti minima magnam. Ipsa pariatur dignissimos rerum cupiditate maxime sed corporis.',
      userId: '115',
      indexRef: 2,
      createdAt: '2019-01-11T02:47:06.328Z',
    },
    {
      id: '140',
      title: 'Quia dignissimos veniam neque itaque.',
      body: 'Nisi doloremque esse ex. Aliquid nam optio et ut facilis qui incidunt nisi et. Magni iure labore doloremque ut.',
      userId: '29',
      indexRef: 8,
      createdAt: '2015-08-30T09:35:49.728Z',
    },
    {
      id: '277',
      title: 'Aut modi non ab animi velit rerum.',
      body: 'Sequi dignissimos nihil perferendis vel amet officiis in. Consequatur rem facilis id nobis ea nihil. At dolor et eos reprehenderit deleniti occaecati dolore est doloremque.',
      userId: '502',
      indexRef: 17,
      createdAt: '2015-11-30T05:04:23.271Z',
    },
    {
      id: '638',
      title: 'Maxime qui magnam saepe ullam.',
      body: 'Illo quod reprehenderit. Consequatur quasi eius et a velit. Quia hic voluptates dolores ratione. Aut quo non quia et iure porro nesciunt voluptas ratione. Aperiam dolor deleniti dolores qui vitae et ipsum. Repellat ex dolor rerum sit quos.\n \rNam ipsam id modi similique perspiciatis delectus tenetur. Explicabo non sunt. Temporibus in et sit suscipit atque praesentium dolor nulla.',
      userId: '502',
      indexRef: 20,
      createdAt: '2016-12-28T22:35:28.886Z',
    },
    {
      id: '833',
      title:
        'Aliquam sit doloremque eos debitis rerum eum odit quaerat incidunt.',
      body: 'Velit qui expedita aliquam voluptatem recusandae sed adipisci qui maiores. Blanditiis perspiciatis eius. Quia illo quos quaerat suscipit. Nulla dolor accusamus. Cumque nobis totam. Tempore ut placeat repellat sed quo sed.',
      userId: '958',
      indexRef: 16,
      createdAt: '2021-01-20T23:50:26.272Z',
    },
    {
      id: '971',
      title: 'Ducimus tenetur officiis in unde repudiandae porro.',
      body: 'Consequatur vero voluptatem quis vero eveniet sed magnam debitis accusamus. Natus et aut eius nisi non voluptatem et. Expedita labore sed eveniet quis veritatis veniam dolorum quo. Inventore id iste doloremque qui eum adipisci eum vel omnis.\n \rVelit similique ratione impedit et. Et deserunt aspernatur temporibus deleniti est excepturi deserunt. Sint sunt consequatur. Dolores modi culpa quia aliquid sunt velit qui cum. Qui aut dolor ducimus ducimus reprehenderit.\n \rIpsa optio rerum magnam. Dolor voluptas adipisci odio. Ex doloremque illo ipsum et. Accusantium labore quae maiores consequatur iure eos nihil ex debitis. Expedita nam porro consequatur.\n \rFugit et placeat et non aut aut ut. Esse eligendi deleniti laudantium earum dolorem possimus expedita. Et rerum dolore id ut quas.\n \rBeatae animi omnis quae ut nesciunt. Est rerum at sunt hic et exercitationem molestiae ut voluptatum. Ut quia et ut optio. Non voluptate expedita dolorem.',
      userId: '903',
      indexRef: 13,
      createdAt: '2019-05-30T19:48:26.635Z',
    },
    {
      id: '513',
      title: 'Aut sequi placeat ea exercitationem perferendis.',
      body: 'Nemo optio iure sapiente excepturi. Ut nam iste dolorem aliquid. Quisquam ducimus velit voluptas laudantium eveniet aut. Ipsum qui non et omnis sed sint aut. Impedit voluptatem porro ratione iure dolorum.',
      userId: '958',
      indexRef: 14,
      createdAt: '2017-12-30T06:30:06.984Z',
    },
    {
      id: '601',
      title: 'Nihil numquam eum iure consequatur.',
      body: 'Repellendus nam voluptates quis accusantium non similique. Adipisci et praesentium maxime ab. Sunt voluptatibus iusto iste commodi alias ut saepe et.\n \rQui minus rerum maxime quia mollitia consequuntur alias sunt. Dolores aliquid cumque. Et magni nulla reiciendis voluptatibus nihil omnis quia iusto qui. Aperiam omnis modi blanditiis cum. Ipsum laborum at.\n \rTempore excepturi sed eveniet aut perferendis. Fugit nobis enim. Earum praesentium iste laboriosam est dolore beatae vitae sit perspiciatis. Eveniet consectetur est fugit iusto. At omnis quas.\n \rFuga voluptatem facere architecto. Similique sequi aut nobis illo. Dignissimos libero eum voluptates praesentium perspiciatis corrupti temporibus qui. Harum et non fugiat illo ad voluptatem id. Quasi voluptate facilis error molestiae nobis. Ab aliquam et ipsum molestiae occaecati molestiae sunt quibusdam deleniti.\n \rOdio soluta dolorem dolorem neque quia optio. Omnis commodi iusto nulla quis. Quia at modi at sunt ut id. Vel qui voluptatem. Vel ut ut perspiciatis voluptatibus quo et vel placeat aut.\n \rProvident dolore quia. Vel vitae voluptatem quae sit voluptas aut libero facilis qui. Dolor in consequatur soluta. Corporis aliquid sit dolorem.',
      userId: '502',
      indexRef: 19,
      createdAt: '2017-04-26T19:39:05.420Z',
    },
    {
      title: 'Meu post logado!!!',
      body: 'Agora temos sistema de login',
      userId: 'xDZo0bA',
      indexRef: 25,
      createdAt: '2021-05-19T11:26:33.019Z',
      id: 'uqj0GRu',
    },
    {
      title: 'Atualizei 5',
      body: '2222 Agora temos sistema de login',
      userId: 'xDZo0bA',
      indexRef: 26,
      createdAt: '2021-05-22T23:09:03.236Z',
      id: 'f4RHWp9',
    },
    {
      title: 'Atualizei 5',
      body: '33 Agora temos sistema de login',
      userId: 'xDZo0bA',
      indexRef: 27,
      createdAt: '2021-05-29T17:59:03.405Z',
      id: 'rj8dWTk',
    },
    {
      title: 'POST DA JOANA',
      body: '33 Agora temos sistema de login',
      userId: 'ASPURjd',
      indexRef: 28,
      createdAt: '2021-05-30T08:15:57.054Z',
      id: 'TI1v2U8',
    },
  ];
  const comments = [
    {
      id: '257',
      comment: 'Quos sequi maxime omnis est. Eaque qui eum.',
      userId: '30',
      postId: '50',
      indexRef: 12,
      createdAt: '2015-09-26T06:03:22.376Z',
    },
    {
      id: '167',
      comment:
        'Aperiam amet accusamus soluta ratione dolorem est pariatur possimus at. Quos commodi velit officia. Est quam ut necessitatibus. In culpa repudiandae sed nihil ipsum quo voluptatem dolorum numquam.',
      userId: '453',
      postId: '455',
      indexRef: 20,
      createdAt: '2019-06-12T10:42:06.037Z',
    },
    {
      id: '535',
      comment:
        'Quia aut voluptatum esse. Earum et est est nulla repellendus qui natus autem est.',
      userId: '30',
      postId: '50',
      indexRef: 15,
      createdAt: '2019-08-12T03:51:14.551Z',
    },
    {
      id: '795',
      comment:
        'Aperiam neque dolor eius eveniet dignissimos veritatis sed neque.',
      userId: '453',
      postId: '455',
      indexRef: 16,
      createdAt: '2016-02-16T01:09:53.056Z',
    },
    {
      id: '593',
      comment:
        'Et placeat reprehenderit consequatur esse maxime dolores. Ab odio veniam delectus ipsam aspernatur sed delectus. In dolorum at optio qui. Sunt quo rerum beatae in quae ipsum quo.',
      userId: '935',
      postId: '361',
      indexRef: 23,
      createdAt: '2019-09-01T10:27:59.303Z',
    },
    {
      id: '105',
      comment:
        'Iusto et dolorem sed sint et. Molestiae ut accusantium qui cupiditate. Earum alias praesentium. Ut quod porro placeat sit quis harum voluptas.',
      userId: '502',
      postId: '833',
      indexRef: 1,
      createdAt: '2020-11-17T13:19:25.118Z',
    },
    {
      id: '340',
      comment:
        'Delectus blanditiis mollitia reprehenderit quos eligendi autem harum. Rerum provident sit sit. Voluptas id soluta rerum suscipit accusantium harum quia ea impedit.',
      userId: '30',
      postId: '50',
      indexRef: 13,
      createdAt: '2015-09-27T05:41:20.473Z',
    },
    {
      id: '828',
      comment:
        'Qui aut in ut deleniti id eaque unde autem. Optio est facilis assumenda est repellat omnis voluptas. Et sit quae quia quia tempora quas in distinctio. Occaecati est natus et qui eligendi esse voluptas sed quia.',
      userId: '453',
      postId: '455',
      indexRef: 18,
      createdAt: '2016-02-04T09:45:18.951Z',
    },
    {
      id: '738',
      comment:
        'Consequatur qui eligendi excepturi voluptatibus magni voluptas et cupiditate. Possimus et praesentium esse necessitatibus commodi. Expedita in dolorem sit libero illum eum dicta cupiditate aliquid. Quod quod nulla laboriosam suscipit animi enim in.',
      userId: '935',
      postId: '361',
      indexRef: 22,
      createdAt: '2019-03-10T08:26:48.274Z',
    },
    {
      id: '427',
      comment:
        'Sed et et doloribus nam dignissimos modi et quasi eaque. Dicta nihil sit dolores.',
      userId: '30',
      postId: '50',
      indexRef: 14,
      createdAt: '2017-07-28T21:26:35.308Z',
    },
    {
      id: '556',
      comment:
        'Neque voluptate vel est tempore odio. Error in quaerat molestiae voluptas quo maiores qui rerum.',
      userId: '439',
      postId: '645',
      indexRef: 4,
      createdAt: '2019-05-05T03:43:37.743Z',
    },
    {
      id: '196',
      comment:
        'Nihil nihil placeat molestiae vel quo iure libero aliquam. Praesentium officia distinctio iusto id maiores et neque et.',
      userId: '592',
      postId: '783',
      indexRef: 3,
      createdAt: '2017-04-16T13:19:03.982Z',
    },
    {
      id: '235',
      comment:
        'Explicabo mollitia omnis vel dolorem at inventore. Illo non qui iste dolor totam at eos et. Voluptatem alias eveniet facilis sed officiis.',
      userId: '935',
      postId: '361',
      indexRef: 24,
      createdAt: '2018-11-04T01:35:02.585Z',
    },
    {
      id: '826',
      comment:
        'Odit cum nihil est beatae officiis at tenetur nam aut. Voluptatem suscipit saepe ea unde ex numquam libero.',
      userId: '29',
      postId: '361',
      indexRef: 11,
      createdAt: '2019-02-20T01:29:37.696Z',
    },
    {
      id: '423',
      comment:
        'Id maxime placeat sit ipsa repellendus nisi temporibus. Iure nobis autem deleniti. Molestiae ratione explicabo. Ex voluptatem non. Consequatur voluptatem consequuntur. Expedita aut sint omnis deserunt repudiandae.',
      userId: '453',
      postId: '455',
      indexRef: 19,
      createdAt: '2018-08-14T00:39:08.464Z',
    },
    {
      id: '974',
      comment:
        'Maiores autem qui autem veritatis cupiditate cupiditate sit ipsum. Quasi alias qui officiis minima et.',
      userId: '958',
      postId: '638',
      indexRef: 6,
      createdAt: '2018-12-10T08:05:30.215Z',
    },
    {
      id: '953',
      comment:
        'Aspernatur suscipit et omnis at alias ut architecto nam. Blanditiis minima molestiae quia modi ea nulla maiores.',
      userId: '115',
      postId: '481',
      indexRef: 8,
      createdAt: '2019-04-27T21:46:15.852Z',
    },
    {
      id: '485',
      comment:
        'Culpa occaecati molestiae enim qui recusandae qui. Quam praesentium aperiam consectetur quas excepturi earum quis hic. Repellendus expedita nam quis ducimus. Est labore voluptate laborum.',
      userId: '592',
      postId: '783',
      indexRef: 2,
      createdAt: '2019-12-07T01:45:48.605Z',
    },
    {
      id: '138',
      comment:
        'Sunt consectetur incidunt et atque occaecati repudiandae in. Expedita sequi quo aliquid. Ea occaecati quia occaecati maiores sunt. Delectus illum ut vero ducimus maxime sed. Cum ex hic perferendis incidunt officiis eveniet velit reprehenderit facilis. Odio temporibus omnis ea fugit ipsum.',
      userId: '903',
      postId: '15',
      indexRef: 7,
      createdAt: '2021-03-25T20:16:21.308Z',
    },
    {
      id: '315',
      comment:
        'Consectetur saepe et odio illo recusandae excepturi soluta. Veniam in voluptatum voluptas eius.',
      userId: '439',
      postId: '645',
      indexRef: 5,
      createdAt: '2017-01-10T00:02:22.315Z',
    },
    {
      id: '790',
      comment:
        'Deleniti quo et voluptates qui est dolores. Aspernatur et ut sint. Laborum voluptatem harum et natus laborum. Eos pariatur iure cumque.',
      userId: '453',
      postId: '455',
      indexRef: 21,
      createdAt: '2017-06-09T09:23:50.696Z',
    },
    {
      id: '755',
      comment:
        'Ut quia necessitatibus cum et explicabo ipsum. Atque veniam sed rerum enim et. Iusto aut enim. Officiis reiciendis id voluptatem vero sit et placeat distinctio. Ipsam consequuntur non accusantium quisquam sit nihil sit velit.',
      userId: '115',
      postId: '481',
      indexRef: 9,
      createdAt: '2017-07-22T02:21:16.995Z',
    },
    {
      id: '780',
      comment: 'Ipsa iure molestiae et odit. Omnis enim enim eum.',
      userId: '453',
      postId: '455',
      indexRef: 17,
      createdAt: '2018-11-13T00:26:04.521Z',
    },
    {
      id: '355',
      comment:
        'Odio maiores ut error sint ullam placeat similique incidunt velit. Odio maiores voluptatem omnis non rerum. Ab ducimus quibusdam impedit asperiores illo magnam et at quisquam. Sint vel non ut quisquam. Quia eum rerum aut voluptatibus.',
      userId: '29',
      postId: '361',
      indexRef: 10,
      createdAt: '2018-03-01T18:38:37.310Z',
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  for (const commet of comments) {
    await prisma.comment.create({
      data: commet,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
