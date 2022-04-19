export const getValuesOfHash = (str, method) => {
    switch (method) {
        case 'activetab':
            let index = str.search('activetab=')
            return str.replace('activetab=', '')[index];
            break
        default:
          return str
    }
};