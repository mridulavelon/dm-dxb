import StickyHeader from "./components/sticky-header";
import Dashboard from "./components/dashboard";
import FooterPage from "./components/footer";
import PlanningDataRequest from "./components/planning-data-request";
import ApplyService from "./components/apply-service";
import RequestDetailsWithSubmited from "./components/request-details-with-submited";
import RequestDetailsUnderReview from "./components/request-details-under-reviw";
import RequestDetails from "./components/RequestDetails";
// import RequestDetails from "./components/request-details";
// import RequestDetailsUnderReview from "./components/request-details-under-reviw";

function App() {

  return (
    <>
      <div className="max-w-[1280px] mx-auto lg:py-10 py-5 ">
        <StickyHeader/>
        {/* Sticky header list */}
      </div>
      {/* <Dashboard/> */}
      
      {/* <RequestDetails/> */}
      {/* <RequestDetailsUnderReview/> */}
      <PlanningDataRequest/>
      {/* <ApplyService/> */}
      {/* <RequestDetailsWithSubmited/> */}
      {/* <RequestDetails/> */}
      <FooterPage/>
    </>
  );
}

export default App;
