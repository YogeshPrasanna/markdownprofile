class CodeResult extends React.Component {
  constructor() {
    super();
    this.state = {
      copySuccess: false,
    };
    this.codeArea = React.createRef();
  }

  copyToClipboard = e => {
    const mdCode = this.codeArea.current.innerText;
    navigator.clipboard.writeText(mdCode);
    this.displaySuccessModal();
  };

  displaySuccessModal = () => {
    this.setState({ copySuccess: true });
    setTimeout(() => {
      this.setState({ copySuccess: false });
    }, 1000);
  };

  render() {
    return (
      <section>
        <header className="pb-2 border-0 border-b-2  border-orange-300 mb-16">
          <h2 className="text-3xl text-bold">
            Step 3 -
            <span className="text-xl">Use the markdown in your profile</span>
          </h2>
        </header>
        <main className="relative">
          <button
            onClick={this.copyToClipboard}
            className="absolute right-0 p-2 border-none focus:outline-none"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Iconly/Broken/Paper">
                <g id="Paper">
                  <path
                    id="Paper_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.2916 7.55651L15.2421 2.24465C15.1005 2.09565 14.9061 2.01208 14.7027 2.01208H14.4974C14.4884 2.01118 14.48 2.00864 14.4717 2.00613L14.4717 2.00613C14.4616 2.00305 14.4515 2 14.4405 2C14.4289 2 14.4184 2.00313 14.408 2.00624C14.3998 2.00872 14.3915 2.01119 14.3827 2.01208H8.07002C5.5926 2.01208 3.5 4.07702 3.5 6.52152V10.6806C3.5 11.0974 3.83498 11.4357 4.24771 11.4357C4.66045 11.4357 4.99543 11.0974 4.99543 10.6806V6.52152C4.99543 4.89554 6.40312 3.52228 8.07002 3.52228H13.6928V5.68487C13.6928 7.52731 15.1763 9.02844 16.9997 9.03247H17.0007C17.4134 9.03247 17.7474 8.69519 17.7484 8.27939C17.7494 7.86157 17.4154 7.52328 17.0027 7.52228C16.0018 7.52026 15.1882 6.6957 15.1882 5.68487V4.36899L19.0046 8.38309V17.3083C19.0046 19.0028 17.6168 20.4898 16.0347 20.4898H8.07002C6.34629 20.4898 4.99543 19.0924 4.99543 17.3083V14.7853C4.99543 14.3685 4.66045 14.0302 4.24771 14.0302C3.83498 14.0302 3.5 14.3685 3.5 14.7853V17.3083C3.5 19.9391 5.50786 22 8.07002 22H16.0347C18.4553 22 20.5 19.8515 20.5 17.3083V8.08004C20.5 7.88472 20.4252 7.69746 20.2916 7.55651ZM8.87007 16.4053H14.2516C14.6644 16.4053 14.9993 16.0671 14.9993 15.6502C14.9993 15.2334 14.6644 14.8951 14.2516 14.8951H8.87007C8.45734 14.8951 8.12236 15.2334 8.12236 15.6502C8.12236 16.0671 8.45734 16.4053 8.87007 16.4053ZM12.2158 11.4195H8.87007C8.45734 11.4195 8.12236 11.0812 8.12236 10.6644C8.12236 10.2476 8.45734 9.90929 8.87007 9.90929H12.2158C12.6286 9.90929 12.9636 10.2476 12.9636 10.6644C12.9636 11.0812 12.6286 11.4195 12.2158 11.4195Z"
                    fill="#e2e8f0"
                  />
                </g>
              </g>
            </svg>
          </button>
          {this.state.copySuccess && (
            <div className="absolute right-0 mr-16 mt-2 py-2 px-3 bg-gray-100 rounded-md">
              Copied
            </div>
          )}
          <pre className="language-css" ref={this.codeArea}>
            <code dangerouslySetInnerHTML={{ __html: this.props.template }} />
          </pre>
        </main>
      </section>
    );
  }
}

export default CodeResult;
