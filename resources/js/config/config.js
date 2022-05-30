export let params = {
  company: {
    name: 'kapkara',
    link: 'https://kapkara.one',
    logo: 'baykus_orange.svg',
    motto: 'simplicity in action',
    title: 'web technologies | design house',
  },

  app: {
    name: 'Tensor',
    title: 'Yöneticinin Akıllı Uygulaması',
    description: 'Description here',
    app_header_logo: 'app_header_logo.svg',
    app_footer_logo: 'app_footer_logo.svg',
    version: '1.0',
    copyright: '© 2022',
  },

  software: [
    {
      group: 'Productivity Apps',

      apps: [
        {
          name: 'Tensor',
          label: 'Skills Management',
          img: 'tensor_brand_logo.svg',
          url: 'https://tensor.kapkara.one',
          desc: `
            <ul>
            <li>Having trouble in managing all skills, roles, levels of competency of your talents?</li>
            <li>Need a centralized web app to keep all your assesments and share them with your employee?</li>
            <li>Tensor is a web based application tailored for your needs. In todays fast changing work environments,
            employees need to adapt to changing requirements.</li>
            </ul>`,
        },
        {
          name: 'eMOM',
          label: 'Minutes of Meetings',
          img: 'emom_brand_logo.svg',
          url: 'https://emom.kapkara.one',
          desc: `
            <p>Private and/or enterprise level Minutes of Meeting (MoM) application with centeralize repository for all data</p>
            <ul>
            <li>Write MoM during and after the meeting.</li>
            <li>Write, trace and monitor MoM Action Items</li>
            <li>Link MoM supporting documentation to MoM.</li>
            <li>Distribute MoM and attachments to participants and/or other related people</li>
            <li>Distribute MoM to project members</li>
            <li>Write independent Action Items to individuals and  trace and monitor them.</li>
            <li>Reply, accept/reject Action Items</li>
            </ul>`,
        },
        {
          name: 'eMemo',
          label: 'Project Memo Exchange',
          img: 'ememo_brand_logo.svg',
          desc: 'Communication Made Easy',
          url: 'https://ememo.kapkara.one',
          desc: `
            <p>Memo Exchange Platform for multi-group, multi-company, multi-national projects</p>
            <ul>
            <li>Centralized platform for exchanging (engineering, program, quality, manufacturing etc) memo</li>
            <li>All memos are automatically distributed to all members of receiving group, company.</li>
            <li>Groups can access received and sent memos only</li>
            <li>For multi company projects, a prime company can manage all subcontactors.</li>
            </ul>`,
        },
        {
          name: 'eDoc',
          label: 'Write Enterprise Documentation',
          img: 'edoc_brand_logo.svg',
          url: 'https://edoc.kapkara.one',
          desc: `
            <p>Centralized platform for writing enterprise level documentation</p>
            <ul>
            <li>Web based (HTML) infrastructure.</li>
            <li>Standards, Specifications, Procedures etc</li>
            <li>Standardized formats for each company</li>
            <li>Configuration controlled, with release and change control flow.</li>
            <li>Mobile friendly access accross.</li>
            </ul>`,
        },
      ],
    },
    {
      group: 'Utility Apps',

      apps: [
        {
          name: 'eYönetici',
          label: 'Bina Yönetim Uygulaması',
          img: 'yonetici_brand_logo.svg',
          url: 'https://yonetici.kapkara.one',
          desc: `
            <p>Gelir/Gider (Aidat, Su/Elektrik/Doğalgaz/Sıcak Su) gibi faturalama ve ödeme takip işlemlerini
            yapıp andında döküm alabileceğiniz bir uygulama.</p>`,
        },

        {
          name: 'Sınav Kapısı',
          label: 'Deneme Sınavları Merkezi',
          img: 'test_brand_logo.svg',
          url: 'https://sinavkapisi.kapkara.one',
          desc: `
            <p>Kendinizi her an deneyebileceğiniz ve gelişiminizi izleyebileceğiniz deneme sınavları merkezi</p>`,
        },
      ],
    },
  ],

  stack: [
    { name: 'Laravel', url: 'https://laravel.com' },
    { name: 'InertiaJS', url: 'https://inertiajs.comm' },
    { name: 'Svelte', url: 'https://svelte.dev' },
    { name: 'Bulma', url: 'https://bulma.io' },
  ],
}

export let gui = {
  icons: {
    size: 'S',
    color: 'link',
  },
}
