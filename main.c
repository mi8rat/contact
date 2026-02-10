#include <stdio.h>
#include "utils.h"

int main() {
    printf("Simple Makefile Project\n");
    printf("======================\n\n");
    
    greet("World");
    
    int result = add(5, 3);
    printf("5 + 3 = %d\n", result);
    
    return 0;
}
