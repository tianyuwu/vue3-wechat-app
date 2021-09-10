const initialStoreContent = localStorage.getItem('vuex')

/**
 * 缓存内的vuex持久化数据
 */
export const initialUnencryptedStorage = initialStoreContent ? JSON.parse(initialStoreContent) : {}
