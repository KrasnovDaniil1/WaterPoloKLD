export const Page = async (page) => {
    let response = await fetch(`https://klwp.pro/api/pages/${page}.json`);
    let data = await response.json();
    return data;
};
