export const Page = async (page) => {
    let response = await fetch(`https://klwp.ru/api/pages/${page}.json`);
    let data = await response.json();
    return data;
};
