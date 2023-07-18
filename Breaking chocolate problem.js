function breakChocolate(n, m) {
    if (n <= 0 || m <= 0) {
      return 0; // If either n or m is zero or negative, no chocolate can be broken.
    }
    
    return (n * m) - 1; // The number of breaks needed is equal to the total number of pieces minus 1.
    }  