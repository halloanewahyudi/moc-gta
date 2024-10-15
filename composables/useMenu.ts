
export const useMenu = () => {
    const menus = [
        {
            name: 'Company',
            slug: 'compamy',
            child: [
                {
                    name: 'Visiand Mission',
                },
                {
                    name: 'Objective',
                },
                {
                    name: 'History',
                },
                {
                    name: 'Facility and Fiture',
                },
                {
                    name: 'Brochure Download',
                },
                {
                    name: 'Assets list',
                }
            ]
        },
        {
            name: 'Services',
            slug: 'services',
            child: [
                {
                    name: 'Heavy Lifting & Haulage'
                },
                {
                    name: 'Heavy Lifting & Haulage'
                },
                {
                    name: 'Steel Structure Work '
                },
                {
                    name: 'Mechanical Work '
                },
                {
                    name: 'Mechanical Work '
                }
            ]
        },
        {
            name: 'Case Studies',
            slug: 'copamy',
            child: []
        },
        {
            name: 'Contact',
            slug: 'contact',
            child: []
        },
        {
            name: 'Info',
            slug: 'info',
            child: []
        }

    ]
    return {
        menus
    }
  }