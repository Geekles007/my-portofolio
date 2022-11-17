import React, {memo} from "react";

type DownloadButtonProps = {}

const DownloadButton = ({}: DownloadButtonProps) => {

    const onDownload = () => {
        fetch('cv.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'tnjl-cv.pdf';
                alink.click();
            })
        })
    }

    return <a rel="noreferrer" onClick={onDownload} className={"resume-button"}>Download my resume </a>

}

export default memo(DownloadButton);
