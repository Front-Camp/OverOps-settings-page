export const hideCharacters = (str, from = 5) =>
  str.slice(0, from) + str.slice(from).replace(/./g, '*');


// TODO: implement method for parsing keys string:
// keys string: S36891#WZ6T/kAT6rnmwluF#DeTYwWEWdZYWeQZPkJGi1NWbetAOsg3ZiXVngulqCNE=#f2f2
// result: S36891***********************************************
// NOTE: the number of "*" and number of hidden chars must be equal!
