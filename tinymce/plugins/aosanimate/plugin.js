/*!
* AOSAnimate
* Released under the MIT License.
*/
tinymce.PluginManager.add('aosanimate', function(editor, url) {
    var openDialog = function () {
        return editor.windowManager.open({
            title: 'Aos Animation',
            body: {
                type: 'panel',
                items: [
                    {
                        type: 'selectbox',
                        name: 'aos',
                        label: 'Animation Type',
                        size: 1,
                        items: [
                            { value: '', text: 'none' },
                            { value: 'fade', text: 'fade' },
                            { value: 'fade-up', text: 'fade-up' },
                            { value: 'fade-down', text: 'fade-down' },
                            { value: 'fade-left', text: 'fade-left' },
                            { value: 'fade-right', text: 'fade-right' },
                            { value: 'fade-up-right', text: 'fade-up-right' },
                            { value: 'fade-up-left', text: 'fade-up-left' },
                            { value: 'flip-up', text: 'flip-up' },
                            { value: 'flip-down', text: 'flip-down' },
                            { value: 'flip-left', text: 'flip-left' },
                            { value: 'flip-right', text: 'flip-right' },
                            { value: 'slide-up', text: 'slide-up' },
                            { value: 'slide-down', text: 'slide-down' },
                            { value: 'slide-left', text: 'slide-left' },
                            { value: 'slide-right', text: 'slide-right' },
                            { value: 'zoom-in', text: 'zoom-in' },
                            { value: 'zoom-in-up', text: 'zoom-in-up' },
                            { value: 'zoom-in-down', text: 'zoom-in-down' },
                            { value: 'zoom-in-left', text: 'zoom-in-left' },
                            { value: 'zoom-in-right', text: 'zoom-in-right' },
                            { value: 'zoom-out', text: 'zoom-out' },
                            { value: 'zoom-out-up', text: 'zoom-out-up' },
                            { value: 'zoom-out-down', text: 'zoom-out-down' },
                            { value: 'zoom-out-left', text: 'zoom-out-left' },
                            { value: 'zoom-out-right', text: 'zoom-out-right' }
                        ]
                    },
                    {
                        type: 'input',
                        name: 'aos_duration',
                        label: 'Animation Duration',
                        inputMode: 'numeric'
                    },
                    {
                        type: 'input',
                        name: 'aos_delay',
                        label: 'Animation Delay',
                        inputMode: 'numeric'
                    },
                    {
                        type: 'input',
                        name: 'aos_offset',
                        label: 'Animation Offset',
                        inputMode: 'numeric'
                    },
                    {
                        type: 'checkbox',
                        name: 'aos_once',
                        label: 'Animation Once',
                    },
                    {
                        type: 'selectbox',
                        name: 'aos_placement',
                        label: 'Anchor Placements',
                        size: 1,
                        items: [
                            { value: 'top-botom', text: 'top-bottom' },
                            { value: 'top-center', text: 'top-center' },
                            { value: 'top-top', text: 'top-top' },
                            { value: 'center-bottom', text: 'center-bottom' },
                            { value: 'center-top', text: 'center-top' },
                            { value: 'bottom-bottom', text: 'bottom-bottom' },
                            { value: 'bottom-center', text: 'bottom-center' },
                            { value: 'bottom-top', text: 'bottom-top' }
                        ]
                    },
                    {
                        type: 'selectbox',
                        name: 'aos_easing',
                        label: 'Esaing',
                        size: 1,
                        items: [
                            { value: 'linear', text: 'linear' },
                            { value: 'ease', text: 'ease' },
                            { value: 'ease-in', text: 'ease-in' },
                            { value: 'ease-out', text: 'ease-out' },
                            { value: 'ease-in-out', text: 'ease-in-out' },
                            { value: 'ease-in-back', text: 'ease-in-back' },
                            { value: 'ease-out-back', text: 'ease-out-back' },
                            { value: 'ease-in-out-back', text: 'ease-in-out-back' },
                            { value: 'ease-in-sine', text: 'ease-in-sine' },
                            { value: 'ease-out-sine', text: 'ease-out-sine' },
                            { value: 'ease-in-out-sine', text: 'ease-in-out-sine' },
                            { value: 'ease-in-quad', text: 'ease-in-quad' },
                            { value: 'ease-out-quad', text: 'ease-out-quad' },
                            { value: 'ease-in-out-quad', text: 'ease-in-out-quad' },
                            { value: 'ease-in-cubic', text: 'ease-in-cubic' },
                            { value: 'ease-out-cubic', text: 'ease-out-cubic' },
                            { value: 'ease-in-out-cubic', text: 'ease-in-out-cubic' },
                            { value: 'ease-in-quart', text: 'ease-in-quart' },
                            { value: 'ease-out-quart', text: 'ease-out-quart' },
                            { value: 'ease-in-out-quart', text: 'ease-in-out-quart' }
                        ]
                    }
                ]
            },
            buttons: [
                {
                    type: 'cancel',
                    text: 'Close'
                },
                {
                    type: 'submit',
                    text: 'Save',
                    primary: true
                }
            ],
            onSubmit: function (api) {
                var data = api.getData();
                // Insert content when the window form is submitted
                var selectedNode = editor.selection.getNode();

                if(data.aos !== "") {
                    selectedNode.setAttribute('data-aos', data.aos);
                    selectedNode.setAttribute('data-aos-duration', data.aos_duration);
                    selectedNode.setAttribute('data-aos-delay', data.aos_delay);
                    selectedNode.setAttribute('data-aos-offset', data.aos_offset);
                    selectedNode.setAttribute('data-aos-once', data.aos_once);
                    selectedNode.setAttribute('data-aos-easing', data.aos_easing);
                    selectedNode.setAttribute('data-aos-anchor-placement', data.aos_placement);
                }else{
                    selectedNode.removeAttribute('data-aos');
                    selectedNode.removeAttribute('data-aos-duration');
                    selectedNode.removeAttribute('data-aos-delay');
                    selectedNode.removeAttribute('data-aos-offset');
                    selectedNode.removeAttribute('data-aos-once');
                    selectedNode.removeAttribute('data-aos-easing');
                    selectedNode.removeAttribute('data-aos-anchor-placement');
                }

                api.close();
            }
        });
    };

    // Add a button that opens a window
    editor.ui.registry.addButton('aosanimate', {
        text: 'AOS',
        onAction: function () {
            // Open window
            var dialog = openDialog();

            var selectedNode = editor.selection.getNode();

            if(typeof selectedNode !== "undefined"){

                var aos = selectedNode.getAttribute('data-aos');

                if(aos !== null){

                    var aos_delay = selectedNode.getAttribute('data-aos-delay');
                    var aos_duration = selectedNode.getAttribute('data-aos-duration');
                    var aos_offset = selectedNode.getAttribute('data-aos-offset');
                    var aos_once = selectedNode.getAttribute('data-aos-once');
                    var aos_easing = selectedNode.getAttribute('data-aos-easing');
                    var aos_placement = selectedNode.getAttribute('data-aos-anchor-placement');

                    dialog.setData({
                        aos: aos,
                        aos_delay: aos_delay,
                        aos_duration: aos_duration,
                        aos_offset: aos_offset,
                        aos_once: aos_once === "true",
                        aos_easing: aos_easing,
                        aos_placement: aos_placement

                    });
                }else{
                    dialog.setData({
                        aos: "",
                        aos_delay: "0",
                        aos_duration: "400",
                        aos_offset: "120",
                        aos_once: true,
                        aos_easing: "ease",
                        aos_placement: "top-botom"

                    });
                }
            }
        }
    });

    // Adds a menu item, which can then be included in any menu via the menu/menubar configuration
    editor.ui.registry.addMenuItem('aosanimate', {
        text: 'AOSAnimate Plugin',
        onAction: function() {
            // Open window
            openDialog();
        }
    });

    return {
        getMetadata: function () {
            return  {
                name: "AOSAnimate Plugin",
                url: "https://github.com/emretulek/tinymceAos"
            };
        }
    };
});
