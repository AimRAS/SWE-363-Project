FilePond.registerPlugin(
    // FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
  )
  
  FilePond.setOptions({
    // stylePanelAspectRatio: 150 / 100,
    // imageResizeTargetWidth: 100,
    // imageResizeTargetHeight: 150
    credits: false,
    labelIdle: 'Drag & Drop your poster or <span class="filepond--label-action">Browse</span>'
  })

  // const inputElement = document.querySelector('input[type="file"]');
  // FilePond.create(inputElement, {
  //     labelIdle: 'Drag & Drop your poster or <span class="filepond--label-action">Browse</span>',
  //     labelFileWaitingForSize: 'Waiting for size',
  //     labelFileSizeNotAvailable: 'Size not available',
  //     labelFileLoading: 'Loading',
  //     labelFileLoadError: 'Error during load',
  //     labelFileProcessing: 'Uploading...',
  //     labelFileProcessingComplete: 'Upload complete',
  //     labelFileProcessingAborted: 'Upload canceled',
  //     labelFileProcessingError: 'Error during upload',
  //     labelFileProcessingRevertError: 'Error during revert',
  //     labelTapToCancel: 'Tap to cancel',
  //     labelTapToRetry: 'Tap to retry',
  //     labelTapToUndo: 'Tap to undo',
  //     labelButtonRemoveItem: 'Remove',
  //     labelButtonAbortItemLoad: 'Abort',
  //     labelButtonRetryItemLoad: 'Retry',
  //     labelButtonAbortItemProcessing: 'Cancel',
  //     labelButtonUndoItemProcessing: 'Undo',
  //     labelButtonRetryItemProcessing: 'Retry',
  //     labelButtonProcessItem: 'Upload',
  //     labelMaxFileSizeExceeded: 'File is too large',
  //     labelMaxFileSize: 'Maximum file size is {filesize}',
  //     labelMaxTotalFileSizeExceeded: 'Maximum total file size exceeded',
  //     labelMaxTotalFileSize: 'Maximum total file size is {filesize}',
  //     labelMaxTotalFileSizeReached: 'Maximum total file size reached',
  //     allowFileTypes: ['image/*', 'application/pdf'],
  //     allowFileSizeValidation: true,
  //     maxFileSize: '5MB',
  // });
  
  
  FilePond.parse(document.body);