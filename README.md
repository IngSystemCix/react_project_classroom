# REACT TEMA: Hooks, Context and Provider

## AUTHOR

Juan Bladimir Romero Collazos

## STEP 01: Required

>[!NOTE]
>Install BunJS for the install resources in the project

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

## STEP 02:

Open the project `react_project_classroom` in VSCode

```bash
bun install
```

## COMMAND IN THE PROJECT

It allows us show project in the navegador web.

```bash
bun run dev
```

## PREVIEW PAGE

![Preview](https://lh3.googleusercontent.com/fife/ALs6j_FSm1HrmwYQohu6YnGa4ltrUIKTcIKPLn6Qg8J5p0CJ2_OGt6nSCN2b6Ott-lCa41Im9i3F-AmQ2YrjmHZMKyMReXrkEJF8BsqiAXtrQ57CbH5YL_gdbbQ-l4k1hmw0yk2J3_7-KOKZ_bRKEMjVeGPVOUrK3y2xloRKfMWrjnAGct-Etp6H5WcWhoCWV3ulhLEHSOl1Vvo7a-ejPQQy5fyc3OrBvdXnU5mHUIqLeNIIng8cTRydZC6YslDni8gFxpdKsLuG6PPbrEJXYJ3VOj9x_5GJHkvJhahv5u97mG8oAedFaI7K5JVrJtUTYSgvXwbjgs9T-Pqtr9f5Nc0oQCKB_peUz4Tyucs3utnz6Ezn3itUEqzYk9DS0RVOl8O1NGueyxadDDMeqspsEwxIcphDyHXF9Zu9ofz7C3EhVJF6jg7PENZ2Og-uwelpUYYIklIxbe1HRMUIGJRwWLUSGW87rsrRBM_MvdTtNrEwDkwvthsRxyIhmi-1MIyAnsChU9gPLStHs_IWNnFt8zAxvDDESw7Xyeh1oxvXR_jF1oUbpr5QuQ51T_I4s9_r-UHnxGkzt5gra31vx0Qh1rE5xGQy7a6s_7kx1kBXYW5jxE-t7I0SrAXlYW7c58BHrrUwbOMSrS6roFIXi2GTQoWeX87AbYlQ-PE5_DaDSU13a75LY18ssjNhNtDKXzYLnDbTzRUuiQEdBSl6p7PW7kL_4OPMwTM2bD1-0DrzS9NNx6QyKoxJf2ehtY31ZPg_hIiLvQlX-SXXBcPcNEHyXv2W-OijgnWDDfss9ARwSNiLMNWlAzpoWoh3DmvNaAzzGlgrjdBthb_K-oHxctvYCYidmcVhRzTlgi3doBohe3G1HVBhCF4eTb389TeZyBVF0zvwfc-SdLLqfmX9R4Vqbo0DiOWoZMTOSwZ8ruDRVg75Ed1GytBTkd-ylbOsDZPAuCDI5BJVaIRezoAUlUDIhKpgMPBl8o-WLxSNyU_BXEKqvUVQbR8v6eBjSF_9G4Nhx1R6NekeuArAz-B7kZclKfbmRh2iuSGVY-smERnfwyxzSAuwAA7TvmMI9B82w6au1s_42t_lr5uTr-gcgu-W3lKgoP3UY9oou438x8HGTVnMYmReOvip7As5Vcvh_ecQyfrR3hZuQUAuiiJK4y0XtnRhXAFvvip_MftwvQSLOvlORLkn4YuNMPDa0LhcG1E1anQhkMZhaGJ7MmTg9SDE0_c--vC9sdEzjHw92j2PQjFEXw5ULbAQcDLE73SuWDmhFnZywSNBqFXRi9OytJt-1b_WVAEANavOOV2bsphu58Ks2Rz3t4PF4TcNKcUCfaJl5l9xR86fNm8h_SUIgGGlWAUo7o0d3JCoJqylX2Jys3baW7zrFAdfPbjrVy1dFEL6jaMukznFrW6wupjpdFWfM__997HQYYd9txEN7RlNotAogktnpAEZXc5KcTIp8l7qILOZCcQIZ6uZY3Zc29UBqxYSu27lBYiLN1q39dqtBc-SwwUHcfUML4pLjHZhZVbJQmdlZeMueUxXWn9DSxGi5mqdzUwbYbosowprgJyUnB_Ip0ya1_W8nk8iRURMF8zuUfQxXrxPSS0rl6-EgyxxTYnpE10RlyjSNnTP9R-1gINtzoAz4qmiTccAwQ=w1851-h883)

## STRUCTURE PROJECT

```
└── 📁react_project_classroom
    └── 📁public
        └── vite.svg
    └── 📁src
        └── 📁assets
            └── react.svg
        └── 📁components
            └── 📁Card
                └── Card.css
                └── Card.tsx
            └── 📁Counter
                └── Counter.css
                └── Counter.tsx
            └── 📁Footer
                └── Footer.css
                └── Footer.tsx
            └── 📁Form
                └── 📁components
                    └── 📁Input
                        └── Input.css
                        └── Input.tsx
                └── 📁schemas
                    └── form.schema.ts
                └── Form.css
                └── Form.tsx
            └── 📁Jumbotron
                └── Jumbotron.css
                └── Jumbotron.tsx
            └── 📁Navbar
                └── Navbar.css
                └── Navbar.tsx
            └── 📁RoutesWithNotFound
                └── RoutesWithNotFound.tsx
            └── 📁ToggleTheme
                └── ToggleTheme.css
                └── ToggleTheme.tsx
            └── index.ts
        └── 📁context
            └── index.ts
            └── Theme.context.ts
            └── Theme.provider.tsx
        └── 📁fonts
            └── Adumu-Inline.ttf
            └── Adumu.ttf
        └── 📁hooks
            └── 📁UseCounter
                └── UseCounter.tsx
            └── index.ts
        └── 📁public
            └── 📁About
                └── About.css
                └── About.tsx
            └── 📁Contact
                └── Contact.css
                └── Contact.tsx
            └── 📁Home
                └── Home.css
                └── Home.tsx
            └── 📁NotFound
                └── NotFound.css
                └── NotFound.tsx
            └── index.ts
        └── App.css
        └── App.tsx
        └── AppHookContainer.tsx
        └── AppRouter.tsx
        └── index.css
        └── main.tsx
        └── vite-env.d.ts
    └── .gitignore
    └── bun.lockb
    └── eslint.config.js
    └── index.html
    └── package.json
    └── README.md
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
```