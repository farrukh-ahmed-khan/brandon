"use client"
import React, { useState, useEffect } from "react";
import logo from "@/assets/images/logo.png"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getEvents } from "@/lib/EventsApi/api";
import toast from "react-hot-toast";
import { Person } from "@mui/icons-material";

interface EventType {
  _id: string;
  eventname: string;
  description?: string;
  images?: string[];
}

const Header = () => {
  const [eventData, setEventData] = useState<EventType[]>([]);
  const local_token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");
  const router = useRouter();
  const navbardata = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Services",
      link: "/services",
      submenu: [
        {
          title: "NewsLetter",
          link: "/newsletter",
        },
        {
          title: "Directory",
          link: "/phonedirectory",
        },
        {
          title: "Dues",
          link: "/dues",
        },
      ],
      hasSubmenu: true,
    },
    {
      id: 3,
      title: "LRV Board",
      link: "/lrvboard",
      submenu: [
        {
          title: "Board Of Directors",
          link: "/lrvboard",
        },
        {
          title: "LRV Board Meetings",
          link: "/lrv-board-meeting",
        },
        {
          title: "LRVHOA By laws",
          link: "/lrvlaw",
        },
      ],
      hasSubmenu: true,
    },

    {
      id: 4,
      title: "Community",
      link: "/community",
      submenu: [
        // {
        //   title: "Neighborhood Watch",
        //   link: "/neighborhood-watch",
        // },
        // {
        //   title: "City of Rulling Hills Estate",
        //   link: "/city-of-rolling-hills-estates",
        // },
        // {
        //   title: "Nextdoor LRV Group",
        //   link: "/nextdoor-lrv-group",
        // },

        // {
        //   title: "Christmas Party",
        //   link: "/annual-lrv-christmas-party",
        // },
        // {
        //   title: "Halloween Party",
        //   link: "/halloween",
        // },
        // {
        //   title: "Car Show",
        //   link: "/car-show",
        // },

        ...eventData.map((event) => ({
          title: event.eventname,
          link: `/event/${event._id}`,
        })),

      ],
      hasSubmenu: true,
    },
    {
      id: 5,
      title: "About LRV",
      link: "/about",
      submenu: [
        {
          title: "Contact LRV",
          link: "/contactus",
        },
        {
          title: "LRV streets Portfolio",
          link: "/streetportfolio",
        },
        {
          title: "LRVHOA.NET SECURITY",
          link: "/security",
        },
        {
          title: "New Neighbor Welcome Flyer",
          link: "/neighbor",
        },
        {
          title: "LRV PHOTO GALLERY",
          link: "/photoGallery",
        },
      ],
      hasSubmenu: true,
    },
    {
      id: 6,
      title: "Vote Candidate",
      link: "/vote-candidate",
    },
  ];



  const [menuOpen, setMenuOpen] = useState(false);



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("ovr-hiddn");
  };


  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    router.push("/login")
    window.location.reload()
  };


  const fetchEventData = async () => {
    try {
      const data = await getEvents();
      console.log(data)
      setEventData(data || []);

    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch events.");
    }
  };


  useEffect(() => {
    return () => {
      document.body.classList.remove("ovr-hiddn");
      document.body.classList.remove("overflw");
    };
  }, []);

  useEffect(() => {
    fetchEventData();
  }, []);

  return (
    <div className="headers-wrapper">
      <div className="header-wrapper">
        <div className="container">
          <div
            className={`menu-Bar ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`menu ${menuOpen ? "open" : ""}`}>
                <ul className="menu">
                  {navbardata.map((data) => (
                    <li
                      key={data.id}
                      className={data.hasSubmenu ? "has-submenu" : ""}
                    >
                      <Link href={data.link}>
                        {data.title}
                        {data.hasSubmenu && (
                          <span className="arrow-down">▼</span>
                        )}
                      </Link>
                      {data.submenu && (
                        <ul className="submenu">
                          {data.submenu.map((subitem, subindex) => (
                            <li key={subindex}>
                              <Link href={subitem.link}>{subitem.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mobile-view">
                  <div className="accounts-wrap-cart">
                    <div className="accounts-wrap">
                      {local_token === null ? (
                        <div>
                          <i className="fa fa-user user-icon"></i>
                          <Link href="/login">Login</Link>
                        </div>
                      ) : (
                        <>

                          <div
                            className="wishlist-wrap"
                            style={{ textAlign: "left", marginLeft: "10px" }}
                          >
                            <Link href="/dashboard">
                              <p className="mb-0">
                                <i
                                  className="fa fa-tachometer"
                                  aria-hidden="true"
                                  style={{ marginRight: "10px" }}
                                ></i>
                                Dashboard
                              </p>
                            </Link>
                          </div>
                          <div></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">

              {local_token === null ? (
                <div className={`menu`}>
                  <ul className="menu">
                    <li className="btn-li">
                      <Link href="/login">Sign In</Link>
                    </li>
                    <li className="btn-li">
                      <Link href="/register">Sign Up</Link>
                    </li>
                  </ul>
                </div>
              ) : (<div className={`menu`}>
                <ul className="menu">
                  {
                    user.role === "home owner" || user.role === "home member" ? (
                      <>
                        <li className="btn-li">
                          <Link href="/profile"><Person /></Link>
                        </li>
                        <li className="btn-li" onClick={() => handleLogout()}>
                          <Link href="">Sign Out</Link>
                        </li>
                      </>
                    ) : (
                      <>
                       
                        <li className="btn-li">
                          <Link href="/login">Dashboard</Link>
                        </li>
                        <li className="btn-li" onClick={() => handleLogout()}>
                          <Link href="">Sign Out</Link>
                        </li>
                      </>
                    )
                  }

                </ul>
              </div>)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
