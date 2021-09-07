# Plant-Ecommerce

## Make sure you're in the correct folder

Run `npm ci` in backend and frontend to install dependecies for Strapi and Next.\
Don't use `npm i`.

## Code Style Guide

### Files and Folders
**Components**\
Naming: `ComponentName.tsx`\
Should be in `Common` folder if shared.

**Page Files**\
Naming:`pageName.tsx`\
Should be organized with components to be readable. For Example: 
```
const somePage = () => (
    <Page>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </Page>
);
```

    

