
tinymce.init({
tinymce_jquery: true,
selector: '#messageText',
readonly : 0,
statusbar: false,
paste_data_images: false,
plugins: 'paste',
paste_block_drop: true,
menu: {
    file: { title: 'File', items: 'newdocument restoredraft | preview | print ' },
    edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat' },
    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
    table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
    help: { title: 'Help', items: 'help' }
  }

});



  tinymce.init({
    tinymce_jquery: true,
    selector: '#emailAddress',
    inline: true,
forced_root_block : 'p',
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});



tinymce.init({
selector: '#listingText',
branding: false,
skin: '$tinySkin',
forced_root_block : 'p',
plugins: 'paste',
paste_data_images: false,
    paste_block_drop: true,
menu: {
    file: { title: 'File', items: 'newdocument restoredraft | preview | print ' },
    edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat' },
    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
    table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
    help: { title: 'Help', items: 'help' }
  }
});

tinymce.init({
selector: '#addressText',
forced_root_block : 'p',
branding: false,
paste_data_images: false,
    plugins: '',
    paste_block_drop: true,
menubar: false,
    statusbar: false,
    toolbar: 'undo redo paste'

});





tinymce.init({
selector: '#listingPhotos',
plugins: 'paste image',
branding: false,
menubar: false,
    statusbar: false,
    toolbar: 'image undo redo',
images_reuse_filename: false,
image_dimensions: false,
image_description: false,
image_title: false,
image_uploadtab: true,
image_prepend_url: 'https://www.fixmarket.org/photostore/index.php?imgFile=',
images_upload_credentials: true,
forced_root_block:false,
force_br_newlines:false,
    force_p_newlines:false,
images_upload_base_path: '/photostore/',
  automatic_uploads: true,
  images_upload_handler: function (blobInfo, success, failure) {
var xhr, formData;
xhr = new XMLHttpRequest();
xhr.withCredentials = false;
xhr.open('POST', '/photostore/postAcceptor.php');
xhr.onload = function() {
  var json;

  if (xhr.status != 200) {
failure('HTTP Error: ' + xhr.status);
return;
  }
  json = JSON.parse(xhr.responseText);

  if (!json || typeof json.location != 'string') {
failure('Invalid JSON: ' + xhr.responseText);
return;
  }
  success(json.location);
};
formData = new FormData();
formData.append('file', blobInfo.blob(), blobInfo.filename());
xhr.send(formData);
  }

});
 
 

    tinymce.init({
    tinymce_jquery: true,
    selector: '#guidePrice',
forced_root_block : 'p',
    inline: true,
readonly : 0,
    statusbar: false,
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    toolbar: 'undo redo',
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});


    tinymce.init({
    tinymce_jquery: true,
    selector: '#phoneNumber',
    inline: true,
forced_root_block : 'p',
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});
  
  
  
  
  
      tinymce.init({
    tinymce_jquery: true,
    selector: '#listingTitle',
    inline: true,
readonly : 0,
forced_root_block : 'p',
plugins: 'paste',
    paste_block_drop: true,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});
  
 
  tinymce.init({
    tinymce_jquery: true,
    selector: '#emailAddress',
    inline: true,
forced_root_block : 'p',
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});


  tinymce.init({
    tinymce_jquery: true,
    selector: '#streetAddress',
    inline: true,
readonly : 0,
forced_root_block : 'p',
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});

  tinymce.init({
    tinymce_jquery: true,
    selector: '#cityAddress',
    inline: true,
readonly : 0,
forced_root_block : 'p',
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});

  tinymce.init({
    tinymce_jquery: true,
    selector: '#postcodeAddress',
    inline: true,
readonly : 0,
forced_root_block : 'p',
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});




  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileNickname',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});




  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileFirstName',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});


  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileAddressOne',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});



  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileAddressTwo',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});




  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileCity',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});



  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileDobDay',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});


  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileDobMonth',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});



  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileDobYear',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});




  tinymce.init({
    tinymce_jquery: true,
    selector: '#profilePhone',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});






  tinymce.init({
    tinymce_jquery: true,
    selector: '#profilePostcode',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});




  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileCounty',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});


  tinymce.init({
    tinymce_jquery: true,
    selector: '#profileLastName',
    inline: true,
readonly : 0,
    statusbar: false,
    toolbar: 'undo redo',
paste_data_images: false,
plugins: 'paste',
    paste_block_drop: true,
    menubar: false,
    setup : function(ed) {
        ed.on('keydown', function(e) {
            if (e.keyCode == 13) {
                e.preventDefault();
            }
        });
    }
});




 
 

$(document).ready(function() {
tinymce.activeEditor.uploadImages(function(promise) {
document.getElementById('submitUpload').disabled = false; })});