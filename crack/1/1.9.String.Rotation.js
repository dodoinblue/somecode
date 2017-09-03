// Assuming there is a method isSubString. use one call to isSubString to check if s2 is a rotation of s1.
function isRotation(str1, str2) {
  let doubleIt = str1 + str1
  return doubleIt.indexOf(str2) > -1
}