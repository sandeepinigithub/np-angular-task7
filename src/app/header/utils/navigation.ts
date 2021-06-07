export const nav = [
    {
        name: "Home",
        url: "#home",
        dropdown: false
    },
    {
        name: "Features",
        url: "#feature",
        dropdown: false
    },
    {
        name: "Works",
        url: "#work",
        dropdown: false
    },
    {
        name: "Services",
        url: "#service",
        dropdown: false
    },
    {
        name: "Contact",
        url: "#contact",
        dropdown: false
    },
    {
        name: "Pages",
        dropdown: true,
        subnav: [
            {
                name: "Features",
                url: "#feature"
            },
            {
                name: "Works",
                url: "#work",
            },
            {
                name: "Services",
                url: "#service"
            },
            {
                name: "Contact",
                url: "#contact"
            }
        ]
    }
]