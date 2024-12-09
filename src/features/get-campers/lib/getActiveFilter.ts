export const getActiveFilter = (itemFeatures: any) => {
    return Object.entries(itemFeatures)
        .filter(([key, value]) => typeof value === "boolean" && value && key)
        .map(([key]) => key);
};
