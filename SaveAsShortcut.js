
/* *********************** */
/* Projekt: Save-As-Shortcut */
/* Datei: SaveAsShortcut.js */
/* Entwickler: Nicolas Nater, Topix AG */
/* *********************** */

function main() {
        if (app.documents.length == 0)
        {
            alert ("Es ist kein Dokument geöffnet.");
            return;
        } else if (app.activeDocument.saved == false) {
            alert ("Das Dokument wurde noch nicht gespeichert.");
            File.saveDialog();
            return;
        }

    // save at filepath with _Date
    var _doc = app.activeDocument;
    
    // get Date
    var _tempDate = new Date();
    var _jahr = _tempDate.getFullYear().toString();
    
    // Monat
    var _monat;
    if (_tempDate.getMonth() > 9) {
        _monat = _tempDate.getMonth() + 1;
        _monat = _monat.toString();
    } else {
        _monat = _tempDate.getMonth() + 1;
        _monat = "0" + _monat.toString();
    }

    // Tag
    var _tag;
    if (_tempDate.getDate() > 9) {
        _tag = _tempDate.getDate().toString();
        } else {
        _tag = "0" + _tempDate.getDate().toString();
    }
    // Stunde
    var _stunde;
    if (_tempDate.getHours() > 9) {
        _stunde = _tempDate.getHours().toString();
        } else {
        _stunde = "0" + _tempDate.getHours().toString();
    }

    // Minute
    var _minute;
    if (_tempDate.getMinutes() > 9) {
        _minute = _tempDate.getMinutes().toString();
        } else {
        _minute = "0" + _tempDate.getMinutes().toString();
    }

    // Sekunde
    var _sekunde;
    if (_tempDate.getSeconds() > 9) {
        _sekunde = _tempDate.getSeconds().toString();
        } else {
        _sekunde = "0" + _tempDate.getSeconds().toString();
    }

    // Finales Datum
    var _date = _jahr + _monat+ _tag + _stunde + _minute + _sekunde;
    
    // get filePath
    var _pathName = _doc.filePath.fullName;
    var _tempName = _doc.name;
    var _finalDotPosition = _tempName.lastIndexOf( "." ) ;
    var _fullName = _tempName.substr( 0 , _finalDotPosition );
    var myName = _fullName + '_' + _date + '.indd';
    File(_doc.fullName).copy(_pathName + "/" + myName);
    _doc.save();
}

main();