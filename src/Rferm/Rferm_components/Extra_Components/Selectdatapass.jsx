
import React, { useState } from 'react';
import { Button, Checkbox, Center, Grid, Pagination, Table, Text, Notification,  } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { bop1 } from '../DataTables/bop1';
import { bop2 } from '../DataTables/bop2';
import { bop3 } from '../DataTables/bop3';
import { bop4 } from '../DataTables/bop4';
import { bop5 } from '../DataTables/bop5';
import { bop6 } from '../DataTables/bop6';
import { bop7 } from '../DataTables/bop7';
import { bop8 } from '../DataTables/bop8';
import { bop9 } from '../DataTables/bop9';
import { bop10 } from '../DataTables/bop10';
import { bop11 } from '../DataTables/bop11';
import { bop13 } from '../DataTables/bop13';
import { bop12 } from '../DataTables/bop12';
import { notifications } from '@mantine/notifications';



// Import other datasets as needed...


function Ccc({ showNotification }) {
  const [selectedDatasets, setSelectedDatasets] = useState([bop1]);
  const [sendData, setSendData] = useState([bop1]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const maxSelections = 10;

  const datasets = [bop1, bop2,bop3,bop4,bop5,bop6,bop7,bop8,bop9,bop10,bop11,bop12,bop13]; // Add other datasets here...

  const originalIndices = datasets.map((dataset, index) => index);

  const filteredIndices = originalIndices.filter(index =>
    `PLANT ${index + 1}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredIndices.length / itemsPerPage);

  const paginatedIndices = filteredIndices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDatasetSelection = dataset => {
    if (selectedDatasets.includes(dataset)) {
      setSelectedDatasets(selectedDatasets.filter(item => item !== dataset));
    } else {
      if (selectedDatasets.length < maxSelections) {
        setSelectedDatasets([...selectedDatasets, dataset]);
      } else {
        console.warn('Selection limit reached. You can only select up to', maxSelections, 'items.');
      }
    }
  };

  const handleSubmit = () => {
    console.log('Button submit clicked');
    setSendData(selectedDatasets);
    console.log('data i try to send', sendData);
  };

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const handleSearch = event => {
    const term = event.target.value;
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <Grid mt="xl" mb="xl">
      <Grid.Col md={5} lg={5}>
        <Center>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Center>
        <Center>
          <Table>
            <thead>
              <tr>
                <td>Select</td>
                <td>Name</td>
              </tr>
            </thead>
            <tbody>
              {paginatedIndices.map((filteredIndex, index) => (
                <tr key={filteredIndex}>
                  <td>
                    <Checkbox
                      checked={selectedDatasets.includes(datasets[filteredIndex])}
                      onChange={() => handleDatasetSelection(datasets[filteredIndex])}
                      mt="md"
                    />
                  </td>
                  <td>{`PLANT ${filteredIndex + 1}`}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Center>
        <Center>
          {/* Submit button (disabled if no datasets are selected) */}
          <Button mt="xl" mb="10px" onClick={handleSubmit} disabled={selectedDatasets.length === 0}>
            Submit
          </Button>
        </Center>
        <Center>
          {/* Pagination controls */}
          <Pagination
            size="xs"
            radius="sm"
            limit={pageCount}
            value={currentPage}
            onChange={handlePageChange}
            withGoTo
          />
        </Center>
        <div>
          <Center>
            {/* Display message if no datasets are selected */}
            {selectedDatasets.length === 0 && <p>No PIT selected</p>}
          </Center>
        </div>
      </Grid.Col>
    </Grid>
  );
}

export default Ccc;

  
  //   const originalIndices = datasets.map((dataset, index) => index);
  
  //   const filteredIndices = originalIndices.filter(index =>
  //     `PLANT ${index + 1}`.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  
  //   const pageCount = Math.ceil(filteredIndices.length / itemsPerPage);
  
  //   const paginatedIndices = filteredIndices.slice(
  //     (currentPage - 1) * itemsPerPage,
  //     currentPage * itemsPerPage
  //   );
  
  //   const handleDatasetSelection = dataset => {
  //     if (selectedDatasets.includes(dataset)) {
  //       setSelectedDatasets(selectedDatasets.filter(item => item !== dataset));
  //     } else {
  //       if (selectedDatasets.length < maxSelections) {
  //         setSelectedDatasets([...selectedDatasets, dataset]);
  //       } else {
  //        showNotification({
  //           title: 'Selection limit reached',
  //           message: `You can only select up to ${maxSelections} items.`,
  //         });
  //       }
  //     }
  //   };

  //   const handleSubmit = () => {
  //     console.log('Button submit clicked');
  //     setSendData(selectedDatasets);
  //     console.log('data i try to send', sendData);
  //   };
  
  //   const handlePageChange = newPage => {
  //     setCurrentPage(newPage);
  //   };
  
  //   const handleSearch = event => {
  //     const term = event.target.value;
  //     setSearchTerm(term);
  //     setCurrentPage(1);
  //   };
  
  //   return (
  //     <>
  //       <Grid mt="xl" mb="xl">
  //         <Grid.Col md={5} lg={5}>
  //           <Center>
  //             <input
  //               type="text"
  //               placeholder="Search..."
  //               value={searchTerm}
  //               onChange={handleSearch}
  //             />
  //           </Center>
  //           <Center>
  //             <Table>
  //               <thead>
  //                 <tr>
  //                   <td>Select</td>
  //                   <td>Name</td>
  //                 </tr>
  //               </thead>
  //               <tbody>
  //                 {paginatedIndices.map((filteredIndex, index) => (
  //                   <tr key={filteredIndex}>
  //                     <td>
  //                       <Checkbox
  //                         checked={selectedDatasets.includes(datasets[filteredIndex])}
  //                         onChange={() => handleDatasetSelection(datasets[filteredIndex])}
  //                         mt="md"
  //                       />
  //                     </td>
  //                     <td>{`PLANT ${filteredIndex + 1}`}</td>
  //                   </tr>
  //                 ))}
  //               </tbody>
  //             </Table>
  //           </Center>
  //           <Center>
  //             {/* Submit button (disabled if no datasets are selected) */}
  //             <Button mt="xl" mb="10px" onClick={handleSubmit} disabled={selectedDatasets.length === 0}>
  //               Submit
  //             </Button>
  //           </Center>
  //           <Center>
  //             {/* Pagination controls */}
  //             <Pagination
  //               size="xs"
  //               radius="sm"
  //               limit={pageCount}
  //               value={currentPage}
  //               onChange={handlePageChange}
  //               withGoTo
  //             />
  //           </Center>
  //           <div>
  //             <Center>
  //               {/* Display message if no datasets are selected */}
  //               {selectedDatasets.length === 0 && <p>No PIT selected</p>}
  //             </Center>
  //           </div>
  //         </Grid.Col>
  //       </Grid>
  //     </>
  //   );
  // }
  
  // export default Ccc;
  