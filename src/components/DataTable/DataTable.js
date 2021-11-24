import React from "react";
import MUIDataTable from "mui-datatables";
import { loadCSS } from 'fg-loadcss';
import {CircularProgress, MuiThemeProvider, Tooltip} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";
const DataTable=(props)=> {


    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    const options = {
        filterType: 'dropdown',
        responsive: 'stacked',
        search: true,
        print: true,
        confirmFilters: true,
        rowsPerPage: 10,
        caseSensitive: false,
        rowsPerPageOptions: [5, 10, 20, 30],
        selectableRows: false,
        viewColumns:false,
        textLabels: {
            body: {
                noMatch: props.status==="loading" ?
                    'loading...' :
                    'Sorry, no data found',
            },
        },
    };

    const getMuiTheme = () =>
        createMuiTheme({
            overrides: {

                MuiToolbar: {
                    root: {
                        // backgroundColor: '#f00',
                    },
                },
                MUIDataTableToolbar: {
                    actions: {
                        display: "flex",
                        flex: "initial",
                        // move all icons to the right
                        "& > span, & > button": {
                            order: 99
                        },
                        // target the custom toolbar icon
                        "& > span:last-child, & > button:last-child": {
                            order: 1
                        },
                        // target any icon
                        "& > span:nth-child(4), & > button:nth-child(4)": {
                            order: 2
                        }
                    }
                }
            }
        });
    const components = {};
    return (
        <>
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    data={props.data}
                    columns={props.columns}
                    options={options}
                    components={components}
                />
            </MuiThemeProvider>
        </>
    )
}
export default DataTable;

