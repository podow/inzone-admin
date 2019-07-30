const titleInitial = title => title && title
  .split(' ')
  .map(word => word[0])
  .map(char => char.toUpperCase())
  .slice(0, 2)
  .join('');

export default titleInitial;
