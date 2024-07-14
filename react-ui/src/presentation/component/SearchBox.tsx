import React from 'react'

class SearchBox extends React.Component<{}, { inputValue: string }> {
    constructor(props: {}) {
        super(props)
        this.state = {
            inputValue: ""
        }
    }

    onKey13(e: { keyCode: number, which: number }) {
        if (e.keyCode === 13 || e.which === 13) {
            const { inputValue } = this.state
            window.open(`https://www.google.com/search?q=` + inputValue, '_top');
        }
    }

    onChange(e: { target: { value: string } }) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render(): React.ReactNode {
        const { inputValue } = this.state
        return (
            <>
                <div className="search-box set-opacity">
                    <input
                        className="search-input"
                        type="text"
                        autoComplete="off"
                        name="search"
                        id="box-search"
                        placeholder="Nhập từ khóa tìm kiếm..."
                        autoCapitalize="off"
                        autoCorrect="off"
                        role="searchbox"
                        onKeyDown={this.onKey13.bind(this)}
                        onChange={this.onChange.bind(this)}
                        value={inputValue} />

                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchBox