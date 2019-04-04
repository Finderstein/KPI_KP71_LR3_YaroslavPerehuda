//https://www.geeksforgeeks.org/pascal-triangle/
const pascalTriangle = (n) =>
{
    document.write("<pre>");
    for(let line = 1; line <= n; line++) 
    {
        document.write("|" + (line - 1) + "|");
        /*for(let space = n - line; space > 0; space--)
            document.write("  ");*/
        
        let C = 1;// used to represent C(line, i) 
        for(let i = 1; i <= line; i++) 
        {  
            // The first value in a line is always 1 
            document.write(C + "   ");
            C = C * (line - i) / i;  
        } 
        document.write("<br>"); 
    } 
    document.write("</pre>");
}

pascalTriangle(10);