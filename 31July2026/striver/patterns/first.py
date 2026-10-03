def first_pattern(rows, cols):
    for i in range(rows):
        for j in range(cols):
            print("*", end=" ")
        print()


rows = int(input("Enter number of rows: "))
cols = int(input("Enter number of columns: "))
first_pattern(rows, cols)