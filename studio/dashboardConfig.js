export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5feaf7b9df7a47dabf06c9c8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6ynvcp29',
                  apiId: '41345065-2375-4893-9d22-2816a4f6565e'
                },
                {
                  buildHookId: '5feaf7b967f968caa16f4b0b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e194whwy',
                  apiId: '916eda97-628b-42aa-90d6-e9287d148ad7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/puck3000/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e194whwy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
