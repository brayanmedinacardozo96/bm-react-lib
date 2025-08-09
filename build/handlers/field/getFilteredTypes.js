export const getFilteredTypes = (extensionsStr) => {
    if (!extensionsStr)
        return [];
    const extensions = extensionsStr.toLowerCase().split(',').map(ext => ext.trim());
    const mimeTypeMap = {
        'jpg': ['image/jpeg'],
        'jpeg': ['image/jpeg'],
        'png': ['image/png'],
        'gif': ['image/gif'],
        'webp': ['image/webp'],
        'pdf': ['application/pdf'],
        'doc': ['application/msword'],
        'docx': ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        'xls': ['application/vnd.ms-excel'],
        'xlsx': ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
        'txt': ['text/plain'],
        'csv': ['text/csv'],
        'zip': ['application/zip', 'application/x-zip-compressed'],
        'rar': ['application/rar', 'application/x-rar-compressed'],
        'mp4': ['video/mp4'],
        'avi': ['video/avi'],
        'mov': ['video/mov'],
        'mp3': ['audio/mp3'],
        'wav': ['audio/wav'],
        'flac': ['audio/flac']
    };
    const allowedMimeTypes = [];
    extensions.forEach(ext => {
        if (mimeTypeMap[ext]) {
            allowedMimeTypes.push(...mimeTypeMap[ext]);
        }
    });
    return allowedMimeTypes;
};
