export const createSlug = (title) => {
    return title
        .toLowerCase() // Küçük harfe çevir
        .replace(/ /g, "-") // Boşlukları tire ile değiştir
        .replace(/[^\w-]+/g, ""); // Özel karakterleri kaldır
};