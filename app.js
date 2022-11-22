const quizData = [
  {
    question: "Tratamentele termice sunt:",
    a: "Procedee de prelucrare la cald",
    b: "Deformari plastice",
    c: "Incercari mecanice",
    d: "",
    correct: "a",
  },
  {
    question:
      "Se dă un aliaj Fe- C cu 0,20% C. Selectați structura de echilibru caracteristică, la temparatura camerei:",
    a: "ferită",
    b: "perlită",
    c: "ferită și perlită",

    correct: "c",
  },
  {
    question: "Proprietățile perlitei sunt:",
    a: "HB≈200daN/mm2",
    b: "Rm ≈ 85 daN/mm2",
    c: "A ≈ 15%",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Simbolul C70 reprezintă:",
    a: "un oțel carbon de calitate",
    b: "un oțel carbon de calitate cu 0,7%C",
    c: "un oțel aliat cu 1%Mn, 10% Mo",
    d: "",
    correct: "b",
  },
  {
    question: "Simbolul 50CrMo4 reprezintă:",
    a: "0,50%C, Cr - principlal element de aliere, Mo - alt element de aliere, 4 - elementele de aliere aprox. 1%",
    b: "0,5%C, cu 10%Mo",
    c: "5%C si 1%Mo",
    d: "",
    correct: "a",
  },
  {
    question: "Simbolul EN-GJMB-700-2 reprezinta:",
    a: "fonta maleabila neagra",
    b: "Rm=700N/mm2",
    c: "A=2%",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Simbolul EN-GJS-350-22U reprezinta:",
    a: "fontă cenușie cu grafit sferoidal",
    b: "Rmmin =350 N/mm2",
    c: "Amin=22%",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerile sunt:",
    a: "de detensionare",
    b: "de recristalizare",
    c: "de omogenizare",
    d: "de regenerare",
    e: "de creștere a prelucrabilității prin așchiere",
    correct: "a",
    correct: "b",
    correct: "c",
    correct: "d",
    correct: "e",
  },
  {
    question: "Temperatura: Trec = AC3 (AC cem) + (20 – 30)C corespunde:",
    a: "recoacerii complete",
    b: "recoacerii subcritice",
    c: "recoacerii de normalizare",
    d: "",

    correct: "b",
  },
  {
    question: "Recoacerea de detensionare este:",
    a: "o recoacere subcritică",
    b: "fără transformări de fază în stare solidă",
    c: "necesară pentru diminuarea tensiunilor interne",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea de detensionare se aplica după:",
    a: "deformare plastică",
    b: "fisurarea produselor metalice",
    c: "ruperii",
    d: "",
    correct: "a",
  },
  {
    question: "Recoacerea de detensionare a oțelului constă în:",
    a: "încălzirea la 500-575°C",
    b: "menținerea unui timp de 0,5-5h",
    c: "răcirea în aer linştit",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "După recoacerea de detensionare se poate aplica:",
    a: "degrosare",
    b: "degroșare prin finisare",
    c: "rectificare",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Durata de menținere se calculează astfel:",
    a: "câte o oră de menținere pentru fiecare 25 mm grosime maximă de piesă",
    b: "câte o oră pentru 25 cm grosime maximă de piesă",
    c: "câte o oră pentru 2,5 cm grosime maximă de piesă",
    d: "",
    correct: "a",
  },
  {
    question:
      "Identificați structura unei fonte cu 5,5%C la temperatura de 10000C",
    a: "ldeburită și cementită primară",
    b: "ledeburită",
    c: "ferită",
    d: "",
    correct: "a",
  },
  {
    question: "Recoacerea de recristalizare este tratamentul termic:",
    a: "care se aplică în scopul eliminării parţiale sau totale a efectului de ecruisare",
    b: "care se aplică după deformarea plastică",
    c: "care se aplică pentru eliminarea tensiunilotr interne",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Recoacerea de recristalizare este:",
    a: "tratament termic primar, care se aplică între două operații de deformare plastică",
    b: "tratament termic final, dacă urmărește obținerea caracteristicilor de exploatare impuse",
    c: "tratament termic secundar",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Recoacerea de recristalizare cuprinde etapele:",
    a: "poligonizare",
    b: "restaurare",
    c: "recristalizare",
    d: "",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "In cazul recoacerii de recristalizare temperatura Tinc = TR + (100 – 300)C este caracterizată de:",
    a: "TR= (0,2 ...0,5) ·Ttop",
    b: "TR= (0,2 ...0,5) +Ttop",
    c: "TR= (0,2 ...0,5) /Ttop",
    d: "",
    correct: "a",
  },
  {
    question:
      "In cazul recoacerii de recristalizare temperatura de menținere este:",
    a: "Tm = Tinc+ (10 ...30)C",
    b: "Tm = Tinc- (10 ... 30)C",
    c: "Tm = Tinc/ (10 ...30)C",
    d: "",
    correct: "a",
  },
  {
    question: "În cazul recoacerii de recristalizare:",
    a: "regimul de răcire nu influenţează asupra rezultatului recoacerii de recristalizare",
    b: "transformările structurale au loc în timpul încălzirii și menținerii",
    c: "răcirea se face în aer",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea de omogenizare:",
    a: "este o recoacere completă",
    b: "are ca scop diminuarea sau chiar eliminarea completă a neomogenităţilor chimice intracristaline",
    c: "se aplică oțelurilor aliate%",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea de omogenizare:",
    a: "se aplică lingourilor şi pieselor turnate din oţeluri aliate",
    b: "se aplică oţelurilor pentru automate (care conţin cantităţi importante de sulf)",
    c: "se aplică oteluri complex aliate: CrNiMo, CrMnSi, CrMnMo",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "În azul recoacerii de omogenizare temperatura de încălzire este:",
    a: "Tinc = (0,7 – 0,9)TtopTinc = (0,7 ... 0,9)*Ttop",
    b: "Tinc = (0,7 ...0,9)/Ttop",
    c: "Tinc = (0,7 ...0,9)-Ttop",
    d: "",
    correct: "a",
  },
  {
    question: "Temperatura de încălzire este:",
    a: "Tinc = AC3 + (30 ÷ 50)C, pentru oţelurile hipoeutectoide",
    b: "Tinc = AC1 + (30 - 50)C, pentru oțelurile eutectoide",
    c: "Tinc = ACcem + (30 - 50)C, pentru oţelurile hipereutectoide",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "În cazul recoacerii de regenerare în cazul oţelurilor hipoeutectoide:",
    a: "sunt suficiente menţineri de 3–8 minute",
    b: "sunt suficiente 10 minute",
    c: "sunt necesare 60 minute",
    d: "",
    correct: "a",
  },
  {
    question: "În cazul recoacerii de regenerare:",
    a: "răcirea se realizează cu cuptorul sau în aer",
    b: "răcirea se realizează în apă",
    c: "răcirea se realizează în săruri topite",
    d: "",
    correct: "a",
  },
  {
    question:
      "Recoacerea pentru îmbunătăţirea prelucrabilităţii prin aşchiere (globulizare):",
    a: "se aplică oțelurilor eutectoide și hipereutectoide",
    b: "se aplică pentru obţinerea unei perlite globulare",
    c: "este utilă înaintea operaţiilor de degroşare prin aşchiere",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Din punctul de vedere al transformărilor structurale, care au loc în timpul recoacerii, se deosebesc:",
    a: "recoaceri fără transformări de fază în stare solidă sau recoaceri de ordinul I, dacă în timpul recoacerii nu se modifică numărul, natura şi/sau proporţia fazelor din structură",
    b: "recoaceri cu transformări de fază în stare solidă sau recoaceri de ordinul II, dacă în timpul recoacerii se modifică numărul, natura şi/sau proporţia fazelor din structură.",
    c: "recoaceri și căliri",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Un oțel cu 0,45%C, pînă la 727C prezintă o structură de:",
    a: "ferita",
    b: "ferită și perlită",
    c: "perlită",
    d: "",

    correct: "b",
  },
  {
    question: "Recoacerea de grafitizare:",
    a: "se aplică pieselor din fontă cu pereţi subţiri şi pieselor turnate în forme metalice",
    b: "se aplică pieselor din fontă care prezintă după turnare cementită liberă în structură (aşa-numite “zone albe”)",
    c: "se aplică fontelor albe",
    d: "",
    correct: "a",
  },
  {
    question:
      "Identificați structura unui oțel cu 2%C pîna la temperatura de transformare eutectoidă:",
    a: "perlită și cementită secundară",
    b: "ferită",
    c: "perlită",
    d: "",

    correct: "b",
  },
  {
    question:
      "Identificați structura unui oțel cu 0,45%C la temperatura de 12000C",
    a: "austenită",
    b: "ferită și austenită",
    c: "ferită și perlită",
    d: "",
    correct: "a",
  },
  {
    question:
      "O fontă albă ledeburitică cu 3%C, 9%Cr, 5%Ni și 4%Si se simbolizează:",
    a: "EN-GJN-X300CrNiSi 9-5-4",
    b: "EN-GJN-300CrNiSi 9-5-2",
    c: "EN-GJN-X300C CrNiSi 9-5-2",
    d: "",
    correct: "a",
  },
  {
    question: "Un oțel hipoeutectoid conține:",
    a: "pînă la 0,77%C",
    b: "peste 0,77%C",
    c: "0,77%C",
    d: "",
    correct: "a",

    correct: "c",
  },
  {
    question: "O fontă albă hipoeutectică poate avea:",
    a: "3%C",
    b: "5%C",
    c: "4,3%C",
    d: "",
    correct: "a",
  },
  {
    question: "Alegeți structura cu duritatea cea mai mare:",
    a: "perlita",
    b: "ferita",
    c: "austenita",
    d: "",
    correct: "a",
  },
  {
    question: "Linia a1 reprezintă domeniul de recoaceri:",
    a: "subcritice",
    b: "supracritice",
    c: "intercritice",
    d: "",
    correct: "a",
  },
  {
    question: "Linia b reprezintă domeniul recoacerilor:",
    a: "subcritice",
    b: "intercritice",
    c: "supracritice",
    d: "",

    correct: "b",
  },
  {
    question: "Domeniile c1 și c2 corespund recoacerilor:",
    a: "supracritice",
    b: "subcritice",
    c: "intercritice",
    d: "",
    correct: "a",
  },
  {
    question:
      "Dacă un produs metalic din oțel este supus unei prelucrări prin forjare ce fel de tratament se aplică pentru eliminarea tensiunilor interne:",
    a: "recoacere de detensionare, cu încălzire între 650-7000C, menținerea o oră pentru fiecare 25mm grosime produs",
    b: "recoacere de detensionare, cu încălzire între 400-600C, menținerea o oră pentru fiecare 25mm grosime produs    ",
    c: "recoacere de detensionare, cu încălzire între 900-12000C, menținerea o oră pentru fiecare 25mm grosime produs",
    d: "",
    correct: "a",
  },
  {
    question:
      "Stabilirea încadrării unui produs dat pentru anumite condiţii de încălzire date, se face cu ajutorul unui criteriu adimensional, numit criteriul Biot:În funcţie de valoarea acestui criteriu sunt posibile trei situaţii:",
    a: "Bi ≤ 0,25 ⇒ produsul se consideră subţire",
    b: "Bi ≥ 0,5 ⇒ produsul se consideră gros",
    c: "0,25 < Bi < 0,5 ⇒ situaţie intermediară",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Segregația dendritică:",
    a: "poate apărea în oțelurile aliate: CrNiMo, CrMnSi, CrMnMo",
    b: "se caracterizează printr-o puternică neomogenitate chimică",
    c: "care se datorează faptului ca răcirea are loc cu viteza mare iar procesele de difuziune nu au timp să se producă    ",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Granulaţia grosolană, rezultată după aplicarea unei recoaceri de omogenizare la piesele turnate, trebuie înlăturatăprintr-un tratament termic special de: ",
    a: "recoacere de regenerare    ",
    b: "recoacere de recristalizare",
    c: "călire",
    d: "",
    correct: "a",
  },
  {
    question:
      "Structura defectuoasa din imaginea de mai sus se poate corecta prin tratament termic de:",
    a: "regenerare",
    b: "recristalizare",
    c: "detensionare",
    d: "",
    correct: "a",
  },
  {
    question:
      "Structura defectuoasă din imaginea de mai sus se poate corecta prin tratament de recoacere de",
    a: "regenerare",
    b: "recristalizare",
    c: "detensionare",
    d: "",
    correct: "a",
  },
  {
    question:
      "Structura defectuoasă din imagine se poate corecta prin recoacere de:",
    a: "regenerare",
    b: "recristalizare",
    c: "omogenizare",
    d: "",
    correct: "a",
  },
  {
    question: "Normalizarea este:",
    a: "Recoacerea de regenerare cu răcire în aer",
    b: "În acest caz, austenita se transformă la grade de subrăcire mai mari în constituenţi de treaptă perlitică.",
    c: "Recoacerea de recristalizare",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question:
      "Un oțel cu 1,5%C se prelucrează necorespunzător prin fiind necesară aplicarea:",
    a: "unei recoaceri de înmuiere",
    b: "globulizării cristalelor de cementită din perlită şi a cementitei libere din structură",
    c: "de tratament pentru obținerea unei structuri care trebuie să fie alcătuită dintr-o masă de bază feritică, în care sunt înglobate cristale sferice de cementită.",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Oţelurile cu 0,3 – 0,5 %C:",
    a: "nu necesită recoacere de globulizare",
    b: "necesită recoacere de globulizare",
    c: "necesită recoacere de înmuiere",
    d: "",
    correct: "a",
  },
  {
    question: "Oţelurile aliate cu peste 3% elemente de aliere:",
    a: "sunt autocălibile    ",
    b: "prezintă în structura semifabricatelor răcite accelerat (în aer) din domeniul austenitic (spre exemplu, după turnare sau deformare plastică) apar constituenţi duri de călire (bainite, martensită), practic neaşchiabili.",
    c: "necesită revenire precedată de o normalizare",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Simbolul C45 reprezintă:",
    a: "un oțel hipoeutectoid",
    b: "un oțel cu 0,45%C",
    c: "o fontă albă",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Simbolul 33MnCrB5 este:",
    a: "un oțel hipoeutectoid",
    b: "un oțel cu max. 0,33%C",
    c: "o fontă cenușie",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Oțelul X 40MnCr18 reprezintă:",
    a: "un oțel cu max. 0,4%C",
    b: "un oțel hipoeutectoid",
    c: "o fontă albă",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Prin recoacerea de recristalizare se urmărește:",
    a: "eliminarea parțială sau totală a stării ecruisate a materialului",
    b: "formarea unor grăunți noi nedeformaţi",
    c: "obținerea plasticității și tenacități inițiale.",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea de recristalizare este:",
    a: "un tratament termic intermediar (primar), dacă se aplică între două operaţii succesive de deformare plastică la rece",
    b: "un tratament termic final, dacă urmăreşte obţinerea caracteristicilor de exploatare impuse",
    c: "un tratament secundar",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question:
      "Identificați structura unui oțel cu 1%C, 0,3 %Mn, la 7700 C din figura de mai jos:",
    a: "cementită și austenită",
    b: "perlită și cementită sec.",
    c: "austenită",
    d: "",
    correct: "a",
  },
  {
    question: "Identificați structura unui oțel cu 1,2%C și 0,4%Mg la 350",
    a: "perlită și cementită sec.",
    b: "cementită sec. și ledeburită",
    c: "perlită, cementită secundară și ledeburită",
    d: "",
    correct: "a",
  },
  {
    question:
      "Identificați structura unui oțel cu 0,33%C și 0,1Mn% la 11000 C dinfigura:",
    a: "austenită",
    b: "perlită",
    c: "ferită și perlită",
    d: "",
    correct: "a",
  },
  {
    question:
      "Utilizând figura de mai jos alegeți transformarea structurală corectă, în cazul unui oțe eutectoid cu 0,77%C:",
    a: "la 7270 perlita se transformă în austenită    ",
    b: "la 7270 perlita și cementita se transformă în austenită",
    c: "la 7270 perlita și ferita se transformă în austenită",
    d: "",
    correct: "a",
  },
  {
    question: "Oțeurile austenitice:      ",
    a: "sunt aliaje utilizate frecvent pentru aplicatii inoxidabile    ",
    b: "sunt nemagnetice    ",
    c: "prezinta continuturi ridicate de Cr si Ni    ",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Otelurile duplex:",
    a: "combina proprietatile inoxurilor feritice si a celor austenitice  ",
    b: "sunt utilizate datorita rezistentei mari la temperaturi (<1150°C) si in medii corozive    ",
    c: "sunt utilizate pentru cuptoarele de tratament termic",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Otelurile feritice:",
    a: "contin ca principal element de aliere, cromul   ",
    b: "pot fi durificate prin tratament termic",
    c: "se utilizeaza in stare recoapta, au ductibilitate si formabilitate buna",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question:
      "Utilizând figura de mai jos alegeți transformarea structurală corectă, în cazul unui oțe eutectoid cu 0,77%C:",
    a: "la 7270 perlita se transformă în austenită    ",
    b: "la 7270 perlita și cementita se transformă în austenită",
    c: "la 7270 perlita și ferita se transformă în austenită",
    d: "",
    correct: "a",
  },
  {
    question: "Otelurile martensitice:",
    a: "sunt oteluri inalt aliate cu un continut de crom intre 12-18% si continut de carbon de peste 0,1%    ",
    b: "devin austenitice la 950-1050°C si prin calire duc la crearea unei structuri martensitice    ",
    c: "au o duritate ridicata ce evolueaza o data cu cresterea continutului de carbon   ",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Recoacerea otelurilor dure:",
    a: "se aplică oţelurilor eutectoide şi hipereutectoide    ",
    b: "se aplică oțelurilor cu structură predominant perlitică",
    c: "duce la o structură dintr-o masă de bază feritică, în care sunt înglobate cristale sferice de cementită",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Încărcătura metalică:",
    a: "constituie totalitatea produselor metalice, supuse simultan aceleiaşi operaţii de tratament    ",
    b: "este complet definită, dacă se cunoaşte numărul de produse, care o alcătuiesc, şi aşezarea acestora în utilajul de tratament",
    c: "este un corp metalic, de tip semifabricat, piesă sau sculă, supus unei anumite operaţii de tratament termic    ",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Produsul metalic:",
    a: "este un corp metalic, de tip semifabricat, piesă sau sculă, supus unei anumite operaţii de tratament termic    ",
    b: "constituie totalitatea produselor metalice, supuse simultan aceleiaşi operaţii de tratament    ",
    c: "este complet definit, dacă se cunoaşte numărul de produse, care o alcătuiesc, şi aşezarea acestora în utilajul de tratament",
    d: "",
    correct: "a",
  },
  {
    question: "Caracteristicile structurale:      ",
    a: "reprezintă totalitatea mărimilor cu ajutorul cărora se poate descrie complet structura unui material metalic dat.    ",
    b: "se referă la numărul, natura, proporţia şi morfologia (forma, dimensiunea şi distribuţia) fazelor şi constituenţilor structurali",
    c: "reprezintă ansamblul mărimilor de material, care definesc comportarea materialului metalic pe parcursul unei operaţii de prelucrare",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Caracteristicile tehnologice:",
    a: "reprezintă ansamblul mărimilor de material, care definesc comportarea materialului metalic pe parcursul unei operaţii de prelucrare ",
    b: "rezultă, de regulă, prin corelarea mai multor proprietăţi şi se exprimă cantitativ cu ajutorul mai multor indicatori",
    c: "reprezintă ansamblul mărimilor de material, care definesc comportarea acestuia faţă de diferitele solicitări  mecanice, fizice sau chimice la care este supus produsul în exploatare",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Caracteristicile de exploatare:      ",
    a: "reprezintă ansamblul mărimilor de material, care definesc comportarea acestuia faţă de diferitele solicitări  mecanice, fizice sau chimice la care este supus produsul în exploatare.",
    b: "sunt: limita de curgere, limita de rupere, alungirea, gâtuirea, rezilienţa, conductivitatea electrică sau termică,permeabilitatea magnetică, rezistenţa la coroziune, etc",
    c: "reprezintă totalitatea mărimilor cu ajutorul cărora se poate descrie complet structura unui material metalic dat",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Tratamentele termice primare:",
    a: "se intercalează între operaţiile din fluxul de fabricaţie şi pregătesc materialul în vederea executării operaţiei ulterioare aplicării lor.",
    b: "au drept scop obţinerea anumitor caracteristici caracteristici tehnologice.   ",
    c: "au drept scop obţinerea anumitor caracteristici de exploatare, se numesc tratamente termice finale.",
    d: "",
    correct: "a",
    correct: "b",
  },
  {
    question: "Tratamente termice finale:",
    a: "au drept scop obţinerea anumitor caracteristici de exploatare.    ",
    b: "au drept scop obţinerea anumitor caracteristici caracteristici tehnologice.    ",
    c: "se aplică unor produse metalice aflate în stadiile finale de prelucrare (având forma şi dimensiunile finite).   ",
    d: "",
    correct: "a",
    correct: "c",
  },
  {
    question: "Reprezentarea tratamentelor termice:",
    a: "se realizează printr-o succesiune de operaţii de încălzire, menţinere şi răcire    ",
    b: "se numeşte ciclogramă sau ciclu de tratament termic    ",
    c: "se face în coordonate temperatură – timp (T - t)    ",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
  {
    question: "Graficul de mai jos reprezinta:",
    a: "ciclograma    ",
    b: "ciclu de tratament termic    ",
    c: "diagrama in coordonate Temperatura-timp",
    d: "",
    correct: "a",
    correct: "b",
    correct: "c",
  },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      alert("Ai raspuns corect")
      score++
    }
    if (answer !== quizData[currentQuiz].correct) {
      alert("Ai gresit ceva")
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `
    }
  }
})
