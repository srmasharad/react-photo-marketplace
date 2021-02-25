const DownloadButton = ({ file }) => {
    const downloadFile = () => {
        window.location.href = `${file}`
    }
    return (
        <button className="btn btn-primary btn-sm" onClick={downloadFile}><i className="fi  fi-rr-download"></i></button>
    )
}

export default DownloadButton