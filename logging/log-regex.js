//---------------------------------------------Severity Level Log Settings
   "severity" : {
      //---------------------------------------Info 
      "info" : {
         "enable"  : true,
         "summary" : false,
         "pattern" : [
            // [ "begin regex", "end regex" ] or [ "match regex", "" ]
            [ "^Info-\\[", "^\\s*[\\n]" ],           // Info-[ ~ next empty line (multi-line)
            [ "^.*\\[INFO\\]",  "[\\r\\n]"]          // [INFO] ... (single line)
         ],
         "color" : {
            "base"  : "#39CCCC",       // (teal) info message
            "link"  : "#b36915",       // 
            "quote" : "#428a99"        // 
         },
      },

      //--------------------------------------Warning 
      "warning" : {
         "enable"  : true,
         "summary" : true,
         "pattern" : [
            [ "^Warning-\\[", "^\\s*[\\n]" ],          // Warning-[ ~ next empty line (multi-line)
            [ "^.*\\[WARNING\\]",  "[\\r\\n]" ],       // [WARNING].....(single line)
         ],
         "color" : {
            "base"  : "#FFDC00", // (yellow) warning message
            "link"  : "#FD971F", // 
            "quote" : "#4F99D3"  // 
         },
      },

      //---------------------------------------Error
      "error" : {
         "enable"  : true,
         "summary" : true,
         "pattern" : [
            [ "^Error-\\[", "^\\s*[\\n]" ],            // Error-[ ~ next empty line (multi-line)
            [ "^.*\\[ERROR\\]",  "[\\r\\n]" ]          // [ERROR] (single line)
         ],
         "color" : {
            "base"  : "#FF851B", // (orange) info message
            "link"  : "#E6DB74", 
            "quote" : "#4F99D3"  
         },
      },

      //---------------------------------------Severe
      "severe" : {
         "enable"  : true,
         "summary" : true,
         "pattern" : [
            [ "^Severe-\\[", "^\\s*[\\n]" ],            // Severe-[ ~ next empty line (multi-line)
            [ "^.*\\[SEVERE\\]",  "[\\r\\n]" ]          // [SEVERE] ... (single line)
         ],
         "color" : {
            "base"  : "#FF4500", // (orange) warning message
            "link"  : "#cc0000", 
            "quote" : "#428a99"  
         },
      },

      //---------------------------------------Fatal
      "fatal" : {
         "enable"  : true,
         "summary" : true,
         "pattern" : [
            [ "^Fatal-\\[", "^\\s*[\\n]" ],            // Fatal-[ ~ next empty line (multi-line)
            [ "^.*\\[FATAL\\]", "[\\r\\n]" ]           // [FATAL] (single line)
         ],
         "color" : {
            "base"  : "#FF0000",    // (red) info message
            "link"  : "#FF0000",   
            "quote" : "#FF0000"    
         },
      }
   },
