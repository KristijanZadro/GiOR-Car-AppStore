import { useState } from 'react'
import './Cars.css'


export const Cars = () => {
    return (
        <p>cars</p>
    )
    /*const [searchValue, setSearchValue] = useState("")
    const [value, setValue] = useState('movie');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className="medias">
            <SearchContainer
                value={searchValue}
                name="searchValue"
                handleChange={handleSearchChange}
                searchAction={getMedias}
                tabValue={value}
            />
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Movies" value="movie" />
                            <Tab label="Shows" value="show" />
                        </TabList>
                    </Box>
                    <TabPanel sx={{backgroundColor:"#c0c2c0"}} value="cars"><CarsList /></TabPanel>

                </TabContext>
            </Box>
        </div>
    )*/
}
