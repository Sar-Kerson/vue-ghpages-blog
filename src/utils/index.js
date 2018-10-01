/**
 * get publish date from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyDate (title) {
  // return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
  return title.split('.')[0]
}

/**
 * get title from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyTitle (title) {
  return title.split('.')[1]
}

/**
 * get category from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyCategory (title) {
  // return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
  return title.split('.')[2]
}

/**
 * get tag from file name
 *
 * @export
 * @param {string} title
 * @returns {string}
 */
export function onlyTag (title) {
  // return /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)[0]
  return title.split('.')[3]
}