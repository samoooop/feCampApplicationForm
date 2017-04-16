import codecs

file = codecs.open("schoolNames.txt", "r","utf-8") 
targetFile = codecs.open("schoolNames.js", "w","utf-8") 

for line in file:
    line = line.rstrip('\n\r')
    line = '\'' + line +'\','
    targetFile.write(line + "\n")