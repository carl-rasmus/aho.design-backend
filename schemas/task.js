import icon from 'react-icons/lib/md/toys'

export default {
  name: 'task',
  title: 'Task',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Task title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Task subtitle',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => {
          console.log(doc)
          return 'hei'
        },
        source: 'name',
        maxLength: 100
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'course',
      title: 'Course',
      type: 'reference',
      to: [{type: 'course'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'blurb',
      title: 'Task description',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'duration',
      title: 'Project duration',
      description: 'Effective work time for the students (e.g. "8 days"). Try to be as specific as possible.',
      type: 'string'
    },
  ],
  preview: {
    select: {
      name: 'name',
      courseName: 'course.name',
      courseYear: 'course.year',
    },
    prepare (selection) {
      const { name, courseName, courseYear } = selection
      return {
        title: `${name}`,
        subtitle: `${courseName}, ${courseYear}`
      }
    }
  }
}
