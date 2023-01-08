
/*KEYWORDS 

Event loop
version(1.1.1)----> (major.minor.patch)
require
server
Module
export/import
settimeout
setinterval
clearinterval
fs
fs.open()
instanceof
private variable--> start with # and getter , setter function to access any particular property
get and set function for private variable
extends for inheritance  and super for accessing property of parent class
class is not hoisted
prototypial chaining
className.prototype.property/function to add in the given class for all instances of class
to get  property of some class using some separate function -----> function.call(reference of obj) 

Asynch call ----> timer, fs/ input output operation, API calls, http( they are run in nodejs not in browser)

function* add() ------> pausible or generetor function &&& yield ----> similar to return 

Revealing Module design pattern---> concept of closure where the variable/method /object of parent variable saved in closure scope can be exposed to the global context by wrapping these under function  and return this by parentfunction 

Phases of Nodejs (behind the scenes) -- 
poll-->>synch. calls and input output operations comes under this 
clock-->> setImmediate
timer-->> settimeout and setinterval
pending callbacks
closed callback

HTTP REQUESTS

GET ----->TO GET THE  DATA
POST -----> TO POST/ADD  THE  DATA
PUT ----->TO MODIFIY THE EXISTING DATA
DELETE ----->TO DELETE
HEAD -----> TO GET ALL THE HEADERS TO CALL THE SPECIFIC HEADER
TRACE-----> TO DEBUG THE API CALL
OPTION----->TO GET ALL AVAIL. OPTIONS
PATCH-----> SIMILAR TO PUT

IDEMPOTENT ------> IF ANY API CALL DOESN'T CHANGE THE STATE OF SERVER  THEN THAT CALL IS IDEMPOTENT




// Regular expression ( pattern matching concept)
/     / ---> it comes always under two backslashes 
/^    / ---> start operator
/^     $/ -----> end operator

we use \ inside Reg Exp. expression to skip the instance to differntiate from reg. expression

\d --> only digits and \d+ ---> no limit to digit  and   \d{2} ---> only 2 digits allowed

A-Atomicity,  C- consistency , I- Isolation , D- Durability (ACID)


-----------COMPONENTS OF DATABASE--------------

HARDWARE 
SOFTWARE 
DATA
PROCESS-- Certain rules to deal with database
DATA ACCESS LANGUAGE -- MySql/MongoDB

Tasks of database

data retreval
data updation
data definition/creation
user administration 




*/









