import React, { useState } from 'react';
import { CardActionArea, Card, CardMedia, CardContent, Grow, Typography, Grid } from '@material-ui/core';
import './Blog.css';
import resumeData from '../../components/utils/resumeData';

const Blog = () => {
    const [tabValue, setTabValue] = useState("All");
    return (
        <Grid container className="section pb_45" spacing={1}>
            {/* Title */}
            <Grid item className="section_title mb_20">
                <span></span>
                <h6 className="section_title_text">Blog Posts</h6>
            </Grid>

            {/* Blogs */}
            <Grid item xs={12}>
                <Grid container spacing={3} >
                    {resumeData.blogs.map((blog) => (
                        <>
                            <Grid item xs={12} sm={6} md={4}>
                                <Grow in timeout={1000}>
                                    <Card className="customCardBlog">
                                        <CardActionArea>
                                            <CardMedia className="customCardBlog_image" image={blog.images} title={blog.title} />
                                            <CardContent>
                                                <Typography variant={'body2'} className='customCardBlog_caption'>{blog.caption}</Typography>
                                                <Typography variant={'bod2'} className='customCardBlog_title'>{blog.title}</Typography>
                                                <Typography variant="body2" className='customCardBlog_description'>{blog.description}</Typography>
                                                <Typography variant="caption" className='customCardBlog_date'>{blog.date}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grow>
                            </Grid>

                        </>

                    ))}
                </Grid>
            </Grid>




        </Grid>
    )
}

export default Blog
