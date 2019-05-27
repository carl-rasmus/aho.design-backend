import icon from 'react-icons/lib/md/school'

export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Course Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => Rule.required().integer().min(2017).max(2090)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `${doc.name}–${doc.year}`,
        maxLength: 100
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'blockContent',
      description: 'Short description of the course',
      validation: Rule => Rule.required()
    },
    {
      name: 'teachers',
      title: 'Teachers',
      description: 'Select one or more teachers responsible for the course',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'teacher'}]
        }
      ]
    },
    {
      name: 'participants',
      title: 'Student',
      description: 'Add the students that are participating in the course',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'student'}]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'year'
    }
  }
}
